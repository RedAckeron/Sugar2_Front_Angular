import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CmdLight } from '../Models/cmdLight';
import { Odp } from '../Models/Odp';
@Injectable({
  providedIn: 'root'
})
export class OdpService
    {
    private _url: string = "https://localhost:7266/Odp/";
    constructor(private _httpClient: HttpClient) {}
   
    AddOdp(odp:Odp )
        {
          return this._httpClient.post<Odp>(this._url + "Create",odp);
        }
    }