import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ConsentDto } from '../models/consent-dto';

export enum ClientType {
  PERSON = 'Person',
  COMPANY = 'Company',
}

type DetailsStepFormGroup = FormGroup<{
  type: FormControl<ClientType | null>;
  name: FormControl<string | null>;
  surname: FormControl<string | null>;
  companyName: FormControl<string | null>;
  nip: FormControl<string | null>;
  email: FormControl<string | null>;
}>;

export type ClientRegistrationFormGroup = FormGroup<{
  detailsStep: DetailsStepFormGroup;
  consentsStep: FormGroup<{
    consents: FormArray<FormControl<boolean | null>>;
  }>;
}>;

@Injectable({
  providedIn: 'root',
})
export class ClientRegistrationForm {
  readonly form: ClientRegistrationFormGroup = new FormGroup({
    detailsStep: new FormGroup({
      type: new FormControl<ClientType | null>(ClientType.PERSON, [Validators.required]),
      name: new FormControl<string | null>(''),
      surname: new FormControl<string | null>(''),
      companyName: new FormControl<string | null>(''),
      nip: new FormControl<string | null>(''),
      email: new FormControl<string | null>('', [Validators.required, Validators.email]),
    }),
    consentsStep: new FormGroup({
      consents: new FormArray<FormControl<boolean | null>>([]),
    }),
  });

  validateForm() {
    const NIP_REGEX = /^(?:\d{10}|\d{3}[- ]?\d{3}[- ]?\d{2}[- ]?\d{2})$/;
    const detailsStep = this.form.get('detailsStep') as DetailsStepFormGroup;
    const clientType = detailsStep.controls['type'].value;
    const requiredPersonControls = ['name', 'surname'];
    const requiredCompanyControls = ['companyName', 'nip'];

    if (clientType === ClientType.PERSON) {
      requiredPersonControls.forEach((controlName) => {
        detailsStep.get(controlName)?.setValidators([Validators.required, Validators.minLength(2)]);
      });

      requiredCompanyControls.forEach((controlName) => {
        detailsStep.get(controlName)?.clearValidators();
      });
    } else if (clientType === ClientType.COMPANY) {
      requiredPersonControls.forEach((controlName) => {
        detailsStep.get(controlName)?.clearValidators();
      });

      detailsStep.get('companyName')?.setValidators([Validators.required, Validators.minLength(2)]);
      detailsStep.get('nip')?.setValidators([Validators.required, Validators.pattern(NIP_REGEX)]);
    } else {
      throw new Error('Unrecognized value "' + clientType + '"');
    }

    [...requiredPersonControls, ...requiredCompanyControls].forEach((controlName) => {
      detailsStep.get(controlName)?.updateValueAndValidity({ emitEvent: false, onlySelf: true });
    });

    detailsStep.markAllAsTouched();
    detailsStep.updateValueAndValidity();
  }

  buildConsentsFromDto(consents: ConsentDto[]) {
    const consentsFormArray = this.form.get('consentsStep')?.get('consents') as FormArray<
      FormControl<boolean | null>
    >;

    consents.forEach((consent: ConsentDto) => {
      consentsFormArray.push(this.buildConsentControlFromConsentDto(consent));
    });
  }

  private buildConsentControlFromConsentDto(consent: ConsentDto): FormControl<boolean | null> {
    const validators: ValidatorFn[] = [];
    if (consent.required) {
      validators.push(Validators.requiredTrue);
    }

    return new FormControl<boolean | null>(false, validators);
  }
}
