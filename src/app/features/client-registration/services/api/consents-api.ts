import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ConsentDto } from '../../models/consent-dto';

@Injectable({
  providedIn: 'root',
})
export class ConsentsApi {
  private readonly consentsMock: ConsentDto[] = [
    {
      id: '1',
      code: 'a',
      title: 'Zgoda marketingowa - lista mailingowa',
      description: 'Zalejemy Cię reklamami!',
      required: true,
      inUse: true,
      scope: 'MARKETING',
    },
    {
      id: '2',
      code: 'b',
      title: 'Zgoda marketingowa - zdjęcie',
      description:
        'Wstawimy Twoje uśmiechnięte zdjęcie na naszą stronę internetową! Zupełnie bez powodu!',
      required: false,
      inUse: true,
      scope: 'MARKETING',
    },
    {
      id: '3',
      code: 'c',
      title: 'Zgoda marketingowa - na nic',
      description: 'Nie w użyciu',
      required: false,
      inUse: false,
      scope: 'MARKETING',
    },
    {
      id: '4',
      code: 'd',
      title: 'Zgoda prawna - sądy',
      description: 'Płać, albo trafisz do sądu.',
      required: true,
      inUse: true,
      scope: 'LEGAL',
    },
    {
      id: '5',
      code: 'e',
      title: 'Zgoda prawna - na nic',
      description: 'Nie w użyciu - brak prawnika.',
      required: false,
      inUse: false,
      scope: 'LEGAL',
    },
    {
      id: '6',
      code: 'f',
      title: 'Zgoda techniczna - klucz francuski',
      description: 'Technicznie nie musisz się na nią zgadzać... ale co Ci szkodzi?',
      required: false,
      inUse: true,
      scope: 'TECH',
    },
    {
      id: '7',
      code: 'g',
      title: 'Zgoda techniczna - serwery te sprawy',
      description: 'Na tą musisz się zgodzić - serwery to ważne rzeczy.',
      required: true,
      inUse: true,
      scope: 'TECH',
    },
    {
      id: '8',
      code: 'h',
      title: 'Zgoda techniczna - na nic',
      description: 'Nie w użyciu.',
      required: false,
      inUse: false,
      scope: 'TECH',
    },
  ];

  fetchConsents(): Observable<ConsentDto[]> {
    return of(this.consentsMock).pipe(delay(2000));
  }
}
