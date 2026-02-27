import { Component, inject, input, OnInit } from '@angular/core';
import { combineLatest, map, Observable, shareReplay, tap } from 'rxjs';
import { ConsentDto } from '../../../../models/consent-dto';
import { ConsentsApi } from '../../../../services/api/consents-api';
import { AsyncPipe } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {
  ClientRegistrationForm,
  ClientRegistrationFormGroup,
} from '../../../../services/client-registration-form';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { FormError } from '../../../../../../shared/form-error/form-error';

@Component({
  selector: 'app-client-registration-step-consents',
  imports: [AsyncPipe, ProgressSpinnerModule, ReactiveFormsModule, CheckboxModule, FormError],
  templateUrl: './client-registration-step-consents.html',
  styleUrl: './client-registration-step-consents.css',
})
export class ClientRegistrationStepConsents implements OnInit {
  private consentsApi = inject(ConsentsApi);
  private clientRegistrationForm = inject(ClientRegistrationForm);
  form = input.required<ClientRegistrationFormGroup>();
  protected consents$: Observable<ConsentDto[]>;
  protected remainingConsents$: Observable<number> | undefined;

  constructor() {
    this.consents$ = this.consentsApi.fetchConsents().pipe(
      map((consents) => consents.filter((consent) => consent.inUse)),
      tap((consents: ConsentDto[]) => this.clientRegistrationForm.buildConsentsFromDto(consents)),
      shareReplay({ bufferSize: 1, refCount: true }),
    );
  }

  ngOnInit() {
    const formChanges = this.form().get('consentsStep')?.valueChanges;
    if (formChanges) {
      // Ta liczba niestety nie mówi nam ile z wymaganych zgód pozostało do zaznaczenia,
      // jedynie odejmuje ilość zaznaczonych (jakichkolwiek) zgód od liczby wymaganych zgód.
      // By to policzyć dokładniej, musiałbym dołączyć do FormArray metadatę.
      // Na początku o tym nie pomyślalem, a teraz już trochę nie mam czasu by to poprawić. :)

      this.remainingConsents$ = combineLatest([
        formChanges.pipe(map((fc) => fc.consents.filter((f) => f).length)),
        this.consents$.pipe(map((c) => c.filter((c) => c.required).length)),
      ]).pipe(
        map(
          ([numberOfTickedConsents, totalNumberOfRequiredConsents]) =>
            totalNumberOfRequiredConsents - numberOfTickedConsents,
        ),
      );
    }
  }
}
