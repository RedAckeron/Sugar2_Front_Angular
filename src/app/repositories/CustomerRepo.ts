import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerRepo {

    private _url: string = "https://localhost:7266/Customer/";
    constructor(private _httpClient: HttpClient) { }

    Read(IdCust: number):Observable<Customer>  
    {
    return this._httpClient.get<Customer>(this._url + "Read/" + IdCust);
    }
}