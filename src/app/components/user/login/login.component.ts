import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

idUser:number=0;
username!:string;
password!:string;

login()
{
  if(this.username=='admin'&& this.password=='admin')
  {
    localStorage.setItem('IdUser','1');
  }
}

logout()
{
localStorage.removeItem('IdUser')
}

}
