import { HttpClient } from '@angular/common/http';
import { Component, Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Models/customer';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToasterService
  {
    /*
  constructor(private messageService: MessageService) {}

  ShowToaster(severity:string,summary:string,detail:string)
      {
        this.messageService.add({ severity, summary, detail });
      }
      */
  }
