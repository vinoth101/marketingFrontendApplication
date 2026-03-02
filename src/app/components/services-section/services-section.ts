import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service {
  title: string;
  description: string;
  image: string;
  icon: string;
  colorOverlay: string;
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services-section.html',
  styleUrl: './services-section.css'
})
export class ServicesSectionComponent {
  services: Service[] = [
    {
      title: 'Decor',
      description: 'Transform your venue with stunning decorations tailored to your theme and vision.',
      image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400&h=250&fit=crop',
      icon: 'palette',
      colorOverlay: 'purple'
    },
    {
      title: 'Video/Camera',
      description: 'Professional videography and photography to capture every precious moment.',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=250&fit=crop',
      icon: 'video',
      colorOverlay: 'blue'
    },
    {
      title: 'Dance',
      description: 'Talented performers to energize your event with spectacular dance routines.',
      image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400&h=250&fit=crop',
      icon: 'music',
      colorOverlay: 'pink'
    },
    {
      title: 'Bouncers',
      description: 'Professional security personnel to ensure your event runs smoothly and safely.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop',
      icon: 'shield',
      colorOverlay: 'green'
    },
    {
      title: 'DJ',
      description: 'Expert DJs with premium sound systems to keep the party going all night long.',
      image: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400&h=250&fit=crop',
      icon: 'disc',
      colorOverlay: 'orange'
    },
    {
      title: 'Food',
      description: 'Delicious catering options from appetizers to full-course meals for any taste.',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=250&fit=crop',
      icon: 'utensils',
      colorOverlay: 'teal'
    }
  ];
}
