import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Add imports
export type User = {
  id: string;
  name: string;
  role: string;
  pokemon: string;
};
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Array<User> = [ // Add employee object
    {
      id: '1',
      name: 'Jane',
      role: 'Designer',
      pokemon: 'Blastoise'
    },
    {
      id: '2',
      name: 'Bob',
      role: 'Developer',
      pokemon: 'Charizard'
    },
    {
      id: '3',
      name: 'Jim',
      role: 'Developer',
      pokemon: 'Venusaur'
    },
    {
      id: '4',
      name: 'Adam',
      role: 'Designer',
      pokemon: 'Yoshi'
    }
  ];
  constructor() { }
  all(): Observable<Array<User>> {
    return of(this.users);
  }
  findOne(id: string): Observable<any> {
    var user = this.users.find((u: User) => {
      return u.id === id;
    });
    return of(user);
  }
}