import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
        console.log("new value : " + value)
        this._isConnected=value
      }});
  }
  }
