import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  MessageService } from 'primeng/api';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]
})

export class HomeComponent {
IdUser!:string;
email!:string;
password!:string;
user!:User;
  constructor(private messageService: MessageService,private _authService:AuthService,private _router:Router) {}
  show() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }

  login()
  {
    this._authService.login(this.email,this.password).subscribe(
      {
        next:(data:User)=>{this.user=data;localStorage.setItem('IdUser',String(this.user.id));this._authService.IsConnected=true;},
        complete:()=>
        {

        }
      })




  // if(this.username=='admin'&& this.password=='admin')
  // {
  //   console.log("logged");
  //   localStorage.setItem('IdUser','1');
  //   this.idUser=localStorage.getItem("IdUser");
  // }
  }

}



