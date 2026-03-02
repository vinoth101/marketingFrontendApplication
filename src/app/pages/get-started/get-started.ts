import { Component } from '@angular/core';

@Component({
  selector: 'app-get-started',
  standalone: true,
  template: `
    <div class="page">
      <h1>Get Started</h1>
      <p>Begin your journey with VibCart</p>
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
export class GetStartedComponent {}
