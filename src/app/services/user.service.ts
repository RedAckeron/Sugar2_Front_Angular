import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/User';
import { environment } from '../environements/environement';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient:HttpClient) { }
//get by id 
GetById(id:number):Observable<User>
  {
  let user=this._httpClient.get<User>(`${environment.apiUrl}/user/Read/${id}`)
  return user;
  }
}
