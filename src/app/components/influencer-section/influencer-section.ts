import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-influencer-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './influencer-section.html',
  styleUrl: './influencer-section.css'
})
export class InfluencerSectionComponent {
  features = [
    {
      icon: 'trending',
      title: 'Boost Visibility',
      description: 'Reach millions with targeted influencer campaigns'
    },
    {
      icon: 'users',
      title: 'Verified Influencers',
      description: 'Connect with authentic creators in your niche'
    },
    {
      icon: 'target',
      title: 'Precise Targeting',
      description: 'Reach your ideal audience demographics'
    },
    {
      icon: 'zap',
      title: 'Quick Results',
      description: 'See engagement within 24-48 hours'
    }
  ];
}
