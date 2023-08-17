import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Models/customer';
import { CustomerAddress } from '../Models/customerAddress';
@Injectable({
  providedIn: 'root'
})
export class AddressService 
    {
    private _url: string = "https://localhost:7266/Address/";
    constructor(private _httpClient: HttpClient) {}

    ReadAllCustomerAddress(IdCust: number):Observable<Array<CustomerAddress>>  
        {
        return this._httpClient.get<Array<CustomerAddress>>(this._url + "ReadCustomerAllAddress/" + IdCust);
        }
    }