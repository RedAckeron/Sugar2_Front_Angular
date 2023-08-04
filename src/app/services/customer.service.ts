import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerRepo } from '../repositories/CustomerRepo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService 
  {
   
  constructor(private _CustomerRepo:CustomerRepo){

  }
  
  
GetCustomer(IdCust:number):Observable<Customer>
    {
      return this._CustomerRepo.Read(IdCust)
    }


    ReadLastCustomers(CustName:string):Observable<Customer[]>
    {
      return this._CustomerRepo.ReadLastCustomers(CustName);
    }


  
   
  
   


}

