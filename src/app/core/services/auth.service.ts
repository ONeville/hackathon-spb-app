import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public login(): void {
    localStorage.setItem('token', 'token');
  }

  public sign(): void {
    localStorage.setItem('token', 'token');
  }

  public signOut(): void {
    localStorage.removeItem('token');
  }

  public getUser(): Observable<User> {
    return of({
      firstName: 'Elizabeth',
      lastName: 'Gracielle',
      email: '',
      phone: '+1 (250) 5001-32014'
    });
  }
}
