import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { FormLogin } from '../models/Forms/FormLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
IsConnected:boolean=false;
user:User;
  private _url: string = "https://localhost:7266/User/";
  constructor(private _httpClient: HttpClient) {}

  login(email:string,password:string):Observable<User>
    {

     this._httpClient.post<User>(this._url + "Login/",{email,password}).subscribe({
      next:(data:User)=>{user=data;localStorage.setItem('IdUser',String(this.user.id));this._authService.IsConnected=true;},
     complete:()=>
     {

     }});










    }
  logout()
    {

    }
  }
