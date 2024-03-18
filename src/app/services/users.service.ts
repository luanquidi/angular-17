import { Injectable, computed, inject, signal } from '@angular/core';
import type { User, UsersReponse, UserResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';


interface State {
  users: User[];
  loading: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  #http = inject(HttpClient)

  #state = signal<State>({
    users: [],
    loading: true
  })


  users = computed(() => this.#state().users);
  loading = computed(() => this.#state().loading);

  constructor() {

    this.#http.get<UsersReponse>('https://reqres.in/api/users')
      .pipe(delay(2000))
      .subscribe((res) => {
        this.#state.set({
          loading: false,
          users: res.data
        })
      });

  }

  getUserById(id: string) {
    return this.#http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(2000),
        map(resp => resp.data)
      );
  }

}
