import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OdpLight } from '../models/odp';
import { DlcLight } from '../models/DlcModel';

@Injectable({
  providedIn: 'root'
})
export class DlcService {
  private _url: string = "https://localhost:7266/Dlc/";

  constructor(
    private _httpClient:HttpClient,
    ) { }

  AddDlc(IdUser:number,IdCust:Number):Observable<Number>
  {
    return this._httpClient.post<Number>(this._url + "Create",{AddByUser:IdUser,IdCustomer:IdCust});
  }

ReadAllDlcLight(IdCust: number):Observable<DlcLight[]>
  {
  return this._httpClient.get<DlcLight[]>(this._url + "ReadAllDlcLight/" + IdCust);
  }

}
