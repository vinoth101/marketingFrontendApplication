import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-influencer-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './influencer-dashboard.html',
  styleUrl: './influencer-dashboard.css',
})
export class InfluencerDashboard {
  user = {
    name: 'Alex Johnson',
    category: 'Food & Lifestyle',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    stats: [
      { icon: 'users', value: '125.5K', label: 'Followers', color: 'bg-gradient-to-r from-fuchsia-500 to-pink-500' },
      { icon: 'activity', value: '8.5%', label: 'Engagement', color: 'bg-gradient-to-r from-cyan-400 to-blue-500' },
      { icon: 'dollar-sign', value: '$2,450', label: 'Earnings', color: 'bg-gradient-to-r from-green-400 to-emerald-500' },
      { icon: 'star', value: '4.8', label: 'Rating', color: 'bg-gradient-to-r from-yellow-400 to-orange-500' },
    ],
    promotions: [
      { title: 'Menu Launch Campaign', brand: 'Sunset Cafe', status: 'Active', budget: 500, deadline: 'Mar 20, 2026', progress: 75 },
      { title: 'Spring Fitness Challenge', brand: 'FitLife Studio', status: 'In Review', budget: 750, deadline: 'Mar 25, 2026', progress: 45 },
    ],
    requests: [
      {
        name: 'Maria Rodriguez',
        business: 'Bella Italia Restaurant',
        category: 'Food & Dining',
        time: '2 hours ago',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        budget: 600,
        description: 'Looking for food influencer to promote new Italian menu. Need 3 Instagram reels and 5 story posts over 2 weeks.',
        timeline: '2 weeks',
        location: 'New York, NY',
        requiredFollowers: '100K+',
      },
      {
        name: 'James Chen',
        business: 'Urban Brew Coffee',
        category: 'Cafe & Beverages',
        time: '5 hours ago',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        budget: 400,
        description: 'Seeking lifestyle influencer for our new cold brew collection launch. Requirements: 2 TikTok videos and Instagram collaboration.',
        timeline: '1 week',
        location: 'Los Angeles, CA',
        requiredFollowers: '50K+',
      },
      {
        name: 'Sophie Anderson',
        business: 'Chic Boutique',
        category: 'Fashion & Lifestyle',
        time: '1 day ago',
        avatar: 'https://randomuser.me/api/portraits/women/46.jpg',
        budget: 850,
        description: 'Fashion influencer needed for summer collection showcase. Looking for YouTube video + Instagram carousel posts featuring our new arrivals.',
        timeline: '3 weeks',
        location: 'Miami, FL',
        requiredFollowers: '150K+',
      },
    ],
  };
}
