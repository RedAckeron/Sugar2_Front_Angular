import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environements/environement';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient:HttpClient) { }

SetCurrentCustomer(CurrentCustomer:number):void
  {
  sessionStorage.setItem("CurrentCustomer",CurrentCustomer.toString())
  }

GetCurrentCustomer():number
  {
  let value=sessionStorage.getItem("CurrentCustomer");
  return parseInt(value??"");
  }

//get by id
GetById(id:number):Observable<User>
  {
  let user=this._httpClient.get<User>(`${environment.apiUrl}/user/Read/${id}`)
  return user;
  }
}
