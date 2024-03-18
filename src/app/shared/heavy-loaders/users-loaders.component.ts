import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-users-loaders',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>users-loaders works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersLoadersComponent implements OnInit {

  ngOnInit(): void { }

}
