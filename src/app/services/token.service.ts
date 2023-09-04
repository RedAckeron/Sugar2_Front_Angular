import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public saveToken(token : string): void {
    sessionStorage.setItem('currentUser', (token))
  }

  public saveRefreshToken(refreshToken : string): void {
    sessionStorage.setItem('refreshToken', refreshToken)
  }

  public getToken(): string|null {
   return sessionStorage.getItem('token');
    }

  public getRefreshToken(): string|null {
    return sessionStorage.getItem('refreshToken');
  }
}