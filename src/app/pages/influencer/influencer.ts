import { Component } from '@angular/core';

@Component({
  selector: 'app-influencer',
  standalone: true,
  template: `
    <div class="page">
      <h1>Influencer Program</h1>
      <p>Partner with us to grow your brand</p>
    </div>
  `,
  styles: [`
    .page {
      padding: 3rem 2rem;
      text-align: center;
    }
    h1 {
      font-size: 2.5rem;
      color: #8B5CF6;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.25rem;
      color: #666;
    }
  `]
})
export class InfluencerComponent {}
