import { Component, OnInit } from '@angular/core';
import { AuthService } from './Services/auth.service';

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

   constructor(private _authService:AuthService){

   }

  IdUser:string|null =localStorage.getItem('IdUser');


  ngOnInit(): void {
    this._authService.IsConnected.subscribe({
      next: (value : Boolean) =>
      {
        this._isConnected=value
      }});

  }
  }
