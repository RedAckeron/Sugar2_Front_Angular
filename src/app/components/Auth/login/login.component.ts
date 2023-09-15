import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserFormLogin } from 'src/app/models/Forms/UsersFormLogin';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/Token.service';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]

})
export class LoginComponent implements OnInit {
  public errormessage:string="";
  public userForm! : UserFormLogin
  public loginUser! : FormGroup

  constructor(
    private _authService : AuthService,
    private _userService : UserService,
    private _fromBuilder : FormBuilder,
    private _tokenService : TokenService,
    private _router : Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.loginUser = this._fromBuilder.group({
      Email : [null, [Validators.required]],
      Password : [null, [Validators.required]]
    })
  }

  onSubmit(): void{
    if(this.loginUser.valid)
    {
      this.userForm = new UserFormLogin()
      this.userForm.Email = this.loginUser.value['Email']
      this.userForm.Password = this.loginUser.value['Password']

    this._authService.login(this.userForm).subscribe({
      next : (data) => {
        if (data) {
          if(data.id!=0)
          {
            this._tokenService.saveToken(data.id.toString())
          }
          else 
          {
            this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Login ou mot de passe incorrect !' });
          }
        }
      },
      error : (error) => {
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: error.message });
      },
      complete : () => {
        // Redirection....
        this._router.navigate(['home'])
      }
    })
    }
  else 
  {
    this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Les champs du formulaire sont invalide' });
  }
  }
}
