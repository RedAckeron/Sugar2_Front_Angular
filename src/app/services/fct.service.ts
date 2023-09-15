import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FctLight } from '../models/FctModel';

@Injectable({
  providedIn: 'root'
})
export class FctService {
  private _url: string = "https://localhost:7266/Fct/";

  constructor(private _httpClient:HttpClient) { }

  AddFct(IdUser:number,IdCust:Number):Observable<Number>
  {
    return this._httpClient.post<Number>(this._url + "Create",{AddByUser:IdUser,IdCustomer:IdCust});
  }

  ReadAllFctLight(IdCust: number):Observable<FctLight[]>
    {
    return this._httpClient.get<FctLight[]>(this._url + "ReadAllFctLight/" + IdCust);
    }

}
