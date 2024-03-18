import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import TitleComponent from '@shared/title/title.component';

@Component({
  selector: 'app-change-detenction',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  templateUrl: `./change-detection.component.html`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetenctionComponent {

  frameworksSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });

  frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  };

  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React';
      this.frameworksSignal.update(value => ({
        ...value,
        name: 'React'
      }));
    }, 3000)
    
  }

}
