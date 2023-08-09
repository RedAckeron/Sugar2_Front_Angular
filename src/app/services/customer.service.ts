import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService
  {
  private _url: string = "https://localhost:7266/Customer/";
  constructor(private _httpClient: HttpClient) {}

  CreateCustomer(Cust:Customer):any
  {
    console.log("Create customer : "+JSON.stringify(Cust));
    return this._httpClient.post<Customer>(this._url + "Create", Cust);
  }

  ReadCustomer(IdCust:number):Observable<Customer>
    {
      return this._httpClient.get<Customer>(this._url + "Read/" + IdCust);
    }

  FindCustomers(CustName:string):Observable<Customer[]>
    {
      return this._httpClient.get<Customer[]>(this._url + "findCustomer/" + CustName);
    }
// A modifier
  ReadLastCustomers(CustName:string):Observable<Customer[]>
    {
      return this._httpClient.get<Customer[]>(this._url + "findCustomer/" + CustName);
    }
  }
