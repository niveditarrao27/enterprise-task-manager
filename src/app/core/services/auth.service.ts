import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): Observable<any> {
    return of({
      id: 1,
      name: 'Nivedita',
      role: 'ADMIN',
      token: 'dummy-token'
    })
  }

  logout() {

  }
}
