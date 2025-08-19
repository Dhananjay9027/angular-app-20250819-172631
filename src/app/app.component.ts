import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="container">
      <header>
        <h1>🚀 {{ title }}</h1>
        <p>{{ subtitle }}</p>
      </header>
      
      <main>
        <div class="card">
          <h2>Welcome to Angular + Vite!</h2>
          <p>This is a working Angular application powered by Vite.</p>
          <ul>
            <li>🔥Lightning fast HMR</li>
            <li> Optimized bundling</li>
            <li> Modern tooling</li>
             <li>hello there</li>
          </ul>
        </div>
        
        <div class="actions">
          <button (click)="incrementCounter()">
            Clicked {{ counter }} times
          </button>
          <button (click)="resetCounter()" [disabled]="counter === 0">
            Reset
          </button>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    
    header {
      text-align: center;
      margin-bottom: 2rem;
    }
    
    h1 {
      color: #e91e63;
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }
    
    .card {
      background: linear-gradient(135deg, #e4b858ff 0%, #764ba2 100%);
      color: white;
      padding: 2rem;
      border-radius: 12px;
      margin-bottom: 2rem;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
    
    .card h2 {
      margin-top: 0;
      font-size: 1.8rem;
    }
    
    .card ul {
      list-style: none;
      padding: 0;
    }
    
    .card li {
      padding: 0.5rem 0;
      font-size: 1.1rem;
    }
    
    .actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
    
    button {
      padding: 12px 24px;
      font-size: 1rem;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    button:first-child {
      background: #ff308a;
      color: white;
    }
    
    button:first-child:hover {
      background: #19556cff;
      transform: translateY(-2px);
    }
    
    button:last-child {
      background: #f44336;
      color: white;
    }
    
    button:last-child:hover:not(:disabled) {
      background: #da190b;
      transform: translateY(-2px);
    }
    
    button:disabled {
      background: #ccc;
      cursor: not-allowed;
      transform: none;
    }
  `]
})
export class AppComponent {
  title = 'Angular + Vite';
  subtitle = 'Fast, modern development experience';
  counter = 0;

  incrementCounter() {
    this.counter++;
  }

  resetCounter() {
    this.counter = 0;
  }
}
