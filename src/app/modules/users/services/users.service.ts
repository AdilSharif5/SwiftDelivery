import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users = [
    {
      username: 'Upanshu',
      role: 'Lead',
    },
    {
      username: 'Sowjanya',
      role: 'PMO',
    },
  ];

  constructor() {}

  getUsers() {
    return [...this.users];
  }
}
