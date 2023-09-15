import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatWith } from 'rxjs';
import { ApiListPays } from '../models/Api-ListPays';

@Injectable({
  providedIn: 'root'
})
export class ApiExterneService {
listPays:Array<ApiListPays>= new Array<ApiListPays>

  constructor(private _httpClient:HttpClient) { }
  
  getPays():Observable<Array<ApiListPays>>
    {
    return this._httpClient.get<any>("https://happyapi.fr/api/getLands");
    }
}

