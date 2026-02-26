import { Component, input } from '@angular/core';
import {
  ClientRegistrationFormGroup,
  ClientType,
} from '../../../../services/client-registration-form';
import { SelectModule } from 'primeng/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-client-registration-step-details',
  imports: [SelectModule, FormsModule, FloatLabelModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './client-registration-step-details.html',
  styleUrl: './client-registration-step-details.css',
})
export class ClientRegistrationStepDetails {
  form = input.required<ClientRegistrationFormGroup>();
  protected readonly ClientType = ClientType;
}
