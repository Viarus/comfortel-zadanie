import {Routes} from '@angular/router';
import {ClientRegistrationPage} from './components/client-registration-page/client-registration-page';

export const CLIENT_CREATE_ROUTES: Routes = [
  {
    path: '',
    component: ClientRegistrationPage,
    title: 'Registration',
  },
];
