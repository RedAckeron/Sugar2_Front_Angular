import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from '../models/CustomerModel';
import { CustomerSummary } from '../models/customerSummary';
@Injectable({
  providedIn: 'root'
})
export class CustomerService
  {
    private _currentCustomer : BehaviorSubject<number> = new BehaviorSubject<number>(0);

    get CurrentCustomer() : BehaviorSubject<number>
    {
      return this._currentCustomer;
    }

  private _url: string = "https://localhost:7266/Customer/";
  constructor(private _httpClient: HttpClient) {}

  CreateCustomer(Cust:Customer):any
    {
      return this._httpClient.post<Customer>(this._url + "Create", Cust);
    }

  ReadCustomer(IdCust:number):Observable<Customer>
    {
      return this._httpClient.get<Customer>(this._url + "Read/" + IdCust);
    }

  UpdateCustomer(customer:Customer):Observable<number>
    {
      return this._httpClient.put<number>(this._url + "Update",customer);
    }

  FindCustomers(CustName:string):Observable<Customer[]>
    {
      return this._httpClient.get<Customer[]>(this._url + "findCustomer/" + CustName);
    }

// A modifier
  ReadLastCustomers():Observable<Customer[]>
    {
      return this._httpClient.get<Customer[]>(this._url + "ReadLastCustomer");
    }

  ReadCustomerSummary(IdCust:number):Observable<CustomerSummary>
    {
      return this._httpClient.get<CustomerSummary>(this._url + "ReadCustomerSummary/"+IdCust);
    }

  AddAdr(IdCust:number){
    return this._httpClient.get<Customer[]>(this._url + "ReadLastCustomer");
  }
  }
