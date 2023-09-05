import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RprLight } from '../Models/Rpr';

@Injectable({
  providedIn: 'root'
})
export class RprService {
  private _url: string = "https://localhost:7266/Rpr/";

  constructor(private _httpClient:HttpClient) { }

  AddRpr(IdUser:number,IdCust:Number):Observable<Number>
    {
      return this._httpClient.post<Number>(this._url + "Create",{AddByUser:IdUser,IdCustomer:IdCust});
    }

  ReadAllRprLight(IdCust: number):Observable<RprLight[]>
    {
    return this._httpClient.get<RprLight[]>(this._url + "ReadAllOdpLight/" + IdCust);
    }

}
