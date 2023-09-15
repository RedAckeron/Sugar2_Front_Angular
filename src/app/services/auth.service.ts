import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from '../environements/environement';
import { User } from '../models/User';
import { UserFormLogin } from '../models/Forms/UsersFormLogin';
import { TokenService } from './Token.service';
environment
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isConnected : BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);

  get IsConnected() : BehaviorSubject<Boolean>
  {
    return this._isConnected;
  }

  private _UserSubject : BehaviorSubject<User|null>
  public user!:Observable<User|null>;
  public headers = new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private _httpClient: HttpClient,private _tokenService:TokenService)
  {
    let token :string | null =this._tokenService.getToken();
    //console.log("TOKEN : "+token);
    let IdUser:number=this._tokenService.getUserId();
    //console.log("Type de userid : "+typeof(IdUser));
    
    if(token)
    {
      this._UserSubject = new BehaviorSubject<User|null>(JSON.parse(token))
      this.user = this._UserSubject.asObservable()
    }
    else
    {
      this._UserSubject= new BehaviorSubject<User|null>(null)
    }
  }

  public get userValue(): User|null {
    return this._UserSubject.value
  }

  // Set du token dans le behavior
  SetToken(token : User){
    this._UserSubject.next(token)
  }

  login(userform:UserFormLogin):Observable<User>
    {
    return this._httpClient.post<any>(`${environment.apiUrl }/User/Login/`,{email:userform.Email,password:userform.Password})
    .pipe(map(user=>
        {
          if(user.id!=0)
          {
            this._UserSubject.next(user.token);
            this.IsConnected.next(true);
          }
          return user;
        }))
    }
 
  logout()
    {
    sessionStorage.removeItem("IdUser");
    this.IsConnected.next(false);
    }


  }
