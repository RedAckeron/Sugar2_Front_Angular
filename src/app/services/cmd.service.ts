import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Models/Customer';
import { CustomerAddress } from '../Models/customerAddress';
import { CmdLight } from '../Models/cmdLight';
@Injectable({
  providedIn: 'root'
})
export class CmdService
    {
    private _url: string = "https://localhost:7266/Cmd/";
    constructor(private _httpClient: HttpClient) {}

    ReadAllCmdLight(IdCust: number):Observable<CmdLight[]>
        {
        return this._httpClient.get<CmdLight[]>(this._url + "ReadAllCmdLight/" + IdCust);
        }
    }
