import { Routes } from '@angular/router';
import { LandingPage } from './components/serviceslandingpage/landing-page';
import { InfluencerPage } from './components/influencer-page/influencer-page';
import { EventPage } from './components/event-page/event-page';
import { LoginPage } from './components/login-page/login-page';

import { HeroComponent } from './components/hero/hero';
import { InfluencerDashboard } from './components/influencer-dashboard/influencer-dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'hero', pathMatch: 'full' },
  { path: 'hero', component: HeroComponent },
  { path: 'landing-page', component: LandingPage },
  { path: 'login', component: LoginPage },
  { path: 'influencer', component: InfluencerPage },
  { path: 'influencer/dashboard', component: InfluencerDashboard },
  { path: 'event-management', component: EventPage },
  // You can add a wildcard route or further navigation here
];
