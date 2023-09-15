import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environements/environement';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _CurrentCustomerSubject : BehaviorSubject<number> = new BehaviorSubject<number>(0);

  get CurrentCustomer() : BehaviorSubject<number>
  {
    return this._CurrentCustomerSubject;
  }


  constructor(private _httpClient:HttpClient) { }

SetCurrentCustomer(CurrentCustomer:number):void
  {
    
  sessionStorage.setItem("CurrentCustomer",CurrentCustomer.toString())
  this._CurrentCustomerSubject.next(CurrentCustomer);
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
