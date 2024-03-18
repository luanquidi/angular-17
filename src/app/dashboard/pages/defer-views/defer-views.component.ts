import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';
import TitleComponent from '@shared/title/title.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    HeavyLoadersSlowComponent
  ],
  template: `
    <app-title title="Defer views" />
    
    <section class="grid grid-cols-1 md:grid-cols-2 gap-3">
      @defer () {
        <app-heavy-loaders-slow />
      }@placeholder {
        <p>Cargando...</p>
      }
    </section>

  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferViewsComponent { 



}
