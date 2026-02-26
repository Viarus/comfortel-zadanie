import { Component, inject, input } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ConsentDto } from '../../../../models/consent-dto';
import { ConsentsApi } from '../../../../services/api/consents-api';
import { AsyncPipe } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ClientRegistrationForm,
  ClientRegistrationFormGroup,
} from '../../../../services/client-registration-form';

@Component({
  selector: 'app-client-registration-step-consents',
  imports: [AsyncPipe, ProgressSpinnerModule],
  templateUrl: './client-registration-step-consents.html',
  styleUrl: './client-registration-step-consents.css',
})
export class ClientRegistrationStepConsents {
  private consentsApi = inject(ConsentsApi);
  private clientRegistrationForm = inject(ClientRegistrationForm);
  form = input.required<ClientRegistrationFormGroup>();
  protected consents$: Observable<ConsentDto[]>;

  constructor() {
    this.consents$ = this.consentsApi.fetchConsents().pipe(
      takeUntilDestroyed(),
      map((consents) => consents.filter((consent) => consent.inUse)),
      tap((consents: ConsentDto[]) => this.clientRegistrationForm.buildConsentsFromDto(consents)),
    );
  }
}
