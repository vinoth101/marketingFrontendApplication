import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { InfluencerPage } from './components/influencer-page/influencer-page';
import { EventPage } from './components/event-page/event-page';
import { LoginPage } from './components/login-page/login-page';

export const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPage },
  { path: 'login', component: LoginPage },
  { path: 'influencer', component: InfluencerPage },
  { path: 'event-management', component: EventPage },
  // You can add a wildcard route or further navigation here
];
