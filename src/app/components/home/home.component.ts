import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  MessageService } from 'primeng/api';
import { interval } from 'rxjs';
import { User } from 'src/app/Models/User';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]
})

export class HomeComponent implements OnInit{
  private _isConnected! : Boolean;

  get isConnected()
  {
    return this._isConnected;
  }
IdUser?:string;
email!:string;
password!:string;
user!:User;

  constructor(private messageService: MessageService,private _authService:AuthService) {}
  show() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }

ngOnInit(): void {
this._authService.IsConnected.subscribe({
  next:(value)=>
    {
      console.log("connected ? : "+value)
      this._isConnected=value
    }});
    }
  
}



