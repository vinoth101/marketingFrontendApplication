import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent) },
  { path: 'services', loadComponent: () => import('./pages/services/services').then(m => m.ServicesComponent) },
  { path: 'influencer', loadComponent: () => import('./pages/influencer/influencer').then(m => m.InfluencerComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent) },
  { path: 'get-started', loadComponent: () => import('./pages/get-started/get-started').then(m => m.GetStartedComponent) }
];
