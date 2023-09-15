import { Component, OnInit } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { TokenService } from './Services/Token.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
private _isConnected! : Boolean;

get isConnected()
  {
    return this._isConnected;
  }

  IdUser!:string|null;
   constructor(private _authService:AuthService,private _tokenService:TokenService){
   }

  //IdUser:string|null =localStorage.getItem('IdUser');

  ngOnInit(): void {
    this._tokenService.saveToken("1");// a retirer quand on remet le login component en route 
    this.IdUser=this._tokenService.getToken();
    this._authService.IsConnected.subscribe({
      next: (value : Boolean) =>
      {
        this._isConnected=value
      }});
  }
  }
