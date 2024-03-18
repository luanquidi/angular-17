import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import TitleComponent from '@shared/title/title.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    TitleComponent,
  ],
  template: `
    <app-title title="Users" />

    <section class="grid grid-cols-1 md:grid-cols-2 gap-3">
      @for(user of usersService.users(); track $index){
        <div class="bg-white  rounded shadow p-10 cursor-pointer" [routerLink]="['/dashboard/user', user.id]">
            <img 
              [srcset]="user.avatar"
              class="rounded w-14"
            >
            <h2 class="text-2xl font-bold mb-5">
                {{ user.first_name }} {{ user.last_name }}
            </h2>
            <p>{{ user.email }}</p>
        </div>
      }@empty {
        <h3 class="animate-pulse font-bold">Cargando...!</h3>
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
export default class UsersComponent implements OnInit {

  usersService = inject(UsersService)

  ngOnInit(): void { 
    this.usersService.users();
  }

}
