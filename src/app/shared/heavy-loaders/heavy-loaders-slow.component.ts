import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>heavy-loaders-slow works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersSlowComponent implements OnInit {

  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}
  }

  ngOnInit(): void { 
   
  }

}
