import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { ClientRegistrationStepDetails } from './steps/client-registration-step-details/client-registration-step-details';
import { ClientRegistrationStepConsents } from './steps/client-registration-step-consents/client-registration-step-consents';
import { ClientRegistrationForm } from '../../services/client-registration-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-registration-page',
  imports: [
    ButtonModule,
    StepperModule,
    ClientRegistrationStepDetails,
    ClientRegistrationStepConsents,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './client-registration-page.html',
  styleUrl: './client-registration-page.css',
  host: {
    class: 'grow max-w-5xl min-w-sm',
  },
})
export class ClientRegistrationPage {
  private readonly clientRegistrationForm: ClientRegistrationForm = inject(ClientRegistrationForm);
  protected readonly form = this.clientRegistrationForm.form;
  protected currentStep: number = 1;
  protected viewFormJSON: unknown;

  protected onSubmit() {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    if (this.form.valid) {
      const raw = this.form.getRawValue();
      console.log('saved', raw);
      this.viewFormJSON = JSON.stringify(raw);
    }
  }

  protected onValidateFormAndMoveToNextStep(): void {
    this.clientRegistrationForm.validateForm();
    if (this.form.get('detailsStep')?.valid) {
      this.currentStep = 2;
    } else {
      console.log(this.form);
    }
  }

  protected onGoBack(): void {
    this.currentStep = 1;
  }
}
