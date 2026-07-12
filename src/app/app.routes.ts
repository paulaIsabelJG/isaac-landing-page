import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home-page.component').then((m) => m.HomePageComponent),
  },
  {
    path: 'como-funciona',
    loadComponent: () =>
      import('./pages/how-it-works/how-it-works-page.component').then(
        (m) => m.HowItWorksPageComponent,
      ),
  },
  {
    path: 'privacidad',
    loadComponent: () =>
      import('./pages/privacy/privacy-page.component').then((m) => m.PrivacyPageComponent),
  },
  {
    path: 'terminos',
    loadComponent: () =>
      import('./pages/terms/terms-page.component').then((m) => m.TermsPageComponent),
  },
  { path: '**', redirectTo: '' },
];
