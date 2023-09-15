import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adr } from '../models/AdrModel';
@Injectable({
  providedIn: 'root'
})
export class AddressService
    {
    private _url: string = "https://localhost:7266/Address/";
    constructor(private _httpClient: HttpClient) {}

    CreateCustomerAddress(IdUser:number,IdCust:Number):Observable<Number>
        {
          //return this._httpClient.post<Number>(this._url + "CreateCustomerAddress",{AddByUser:IdUser,IdCustomer:IdCust});
          return this._httpClient.post<Number>(this._url + "CreateCustomerAddress?idCustomer=1",{
            "id": 0,
            "adrInfo": "",
            "adrRue": "",
            "adrNo": "",
            "adrVille": "",
            "adrCp": "",
            "adrPays": ""
          });

        }
   
    ReadAddress(IdAdr: number):Observable<Adr>
        {
        return this._httpClient.get<Adr>(this._url + "Read/" + IdAdr);
        }
    ReadAllCustomerAddress(IdCust: number):Observable<Array<Adr>>
        {
        return this._httpClient.get<Array<Adr>>(this._url + "ReadCustomerAllAddress/" + IdCust);
        }

    }
