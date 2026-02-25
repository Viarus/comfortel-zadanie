import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'client-registration',
    loadChildren: () =>
      import('./features/client-registration/client-registration.routes').then(m => m.CLIENT_CREATE_ROUTES)
  },
  { path: '**', redirectTo: 'client-registration' }
];
