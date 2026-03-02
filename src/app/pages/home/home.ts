import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { ServicesSectionComponent } from '../../components/services-section/services-section';
import { InfluencerSectionComponent } from '../../components/influencer-section/influencer-section';
import { CtaSectionComponent } from '../../components/cta-section/cta-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ServicesSectionComponent, InfluencerSectionComponent, CtaSectionComponent],
  template: `
    <app-hero></app-hero>
    <app-services-section></app-services-section>
    <app-influencer-section></app-influencer-section>
    <app-cta-section></app-cta-section>
  `,
  styles: []
})
export class HomeComponent {}
