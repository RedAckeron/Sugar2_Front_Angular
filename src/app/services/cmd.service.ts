import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CmdLight } from '../models/CmdModel';
@Injectable({
  providedIn: 'root'
})
export class CmdService
    {
    private _url: string = "https://localhost:7266/Cmd/";
    constructor(private _httpClient: HttpClient) {}

    AddCmd(IdUser:number,IdCust:Number):Observable<Number>
        {
          return this._httpClient.post<Number>(this._url + "Create",{AddByUser:IdUser,IdCustomer:IdCust});
        }

    ReadAllCmdLight(IdCust: number):Observable<CmdLight[]>
        {
        return this._httpClient.get<CmdLight[]>(this._url + "ReadAllCmdLight/" + IdCust);
        }
    }
