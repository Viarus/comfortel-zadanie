import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRegistrationPage } from './client-registration-page';

describe('ClientRegistrationPage', () => {
  let component: ClientRegistrationPage;
  let fixture: ComponentFixture<ClientRegistrationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientRegistrationPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientRegistrationPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
