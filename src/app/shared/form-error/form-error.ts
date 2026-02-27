import { Component, input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  imports: [],
  templateUrl: './form-error.html',
  styleUrl: './form-error.css',
})
export class FormError {
  control = input.required<AbstractControl | undefined>();

  get show(): boolean {
    const c = this.control();
    return !!c && c.touched && c.invalid;
  }

  get message(): string | null {
    const c = this.control();
    if (!c || !c.errors) return null;

    const errors: ValidationErrors = c.errors;

    if (errors['required']) return 'To pole jest wymagane.';
    if (errors['email']) return 'Podaj poprawny adres email.';
    if (errors['minlength']) return `Niepoprawna długość.`;
    if (errors['pattern']) return 'Niepoprawny format.';
    if (errors['requiredTrue']) return 'Zgoda wymagana.';
    return 'Pole jest niepoprawne.';
  }
}
