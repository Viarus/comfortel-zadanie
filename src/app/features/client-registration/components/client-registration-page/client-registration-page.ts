import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { ClientRegistrationStepDetails } from './steps/client-registration-step-details/client-registration-step-details';
import { ClientRegistrationStepConsents } from './steps/client-registration-step-consents/client-registration-step-consents';

@Component({
  selector: 'app-client-registration-page',
  imports: [
    ButtonModule,
    StepperModule,
    ClientRegistrationStepDetails,
    ClientRegistrationStepConsents,
  ],
  templateUrl: './client-registration-page.html',
  styleUrl: './client-registration-page.css',
  host: {
    class: 'grow max-w-5xl min-w-sm',
  },
})
export class ClientRegistrationPage {
  protected save() {
    console.log('saved');
  }
}
