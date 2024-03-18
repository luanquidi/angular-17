import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import TitleComponent from '@shared/title/title.component';
import { User } from '../../../interfaces/req-response';
import { toSignal } from '@angular/core/rxjs-interop'
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  template: `
    <app-title [title]="titleLabel()" />

    @if(user()){
      <section>
        <img 
          [srcset]="user()!.avatar" 
        />
        <div>
          <h3>
            {{ user()!.first_name }} {{ user()!.last_name }}
          </h3>
          <p> {{ user()!.email }} </p>
        </div>
      </section>
    }@else {
      <h3 class="animate-pulse">Cargando...!</h3>
    }


  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserComponent {

  #route = inject(ActivatedRoute);
  usersService = inject(UsersService);
  user = toSignal(
    this.#route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  )
  titleLabel = computed(() => {
    if(this.user()) return `Información del usuario ${this.user()?.first_name} ${this.user()?.last_name}`;
    else return 'Información del usuario'
  })

  constructor() {

  }

}
