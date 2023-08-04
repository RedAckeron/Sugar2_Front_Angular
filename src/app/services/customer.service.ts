import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerRepo } from '../repositories/CustomerRepo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService 
  {
  constructor(private _CustomerRepo:CustomerRepo){}
  
GetCustomer(IdCust:number):Observable<Customer>
    {
      return this._CustomerRepo.Read(IdCust)
    }





  /*
  Read(IdCust: number):Customer{
    let cust:Customer;
    //return this._MapRepo.GetMap(IdPlanet)
    this._CustomerRepo.GetCustomer(IdCust).subscribe( {
      next: (res) => 
        {
        console.log(res);
        cust=res;
        },
      error: () => {},
      complete: () => {
      this.result = cust}
    })
   return this.result;
   
}
*/
}

