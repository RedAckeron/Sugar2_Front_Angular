import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Customer } from 'src/app/models/CustomerModel';
import { CustomerService } from 'src/app/Services/customer.service';
import { Kp_EmailValidator } from 'src/app/Validators/EmailValidator';
import { TokenService } from 'src/app/Services/Token.service';
import { Adr } from 'src/app/models/AdrModel';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent {

  registerForm : FormGroup;
  idcust:number=0;
  constructor(private _builder : FormBuilder,private _customerService : CustomerService,private _router:Router,private _tokenService:TokenService) {
    //On crée un nouveau formulaire grâce à notre FormBuilder et on le stocke dans notre propriété registerForm
    this.registerForm = this._builder.group({
      FirstName : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      LastName : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      Email : [null, [Validators.email]],
      Call1 : [null, [Validators.minLength(2), Validators.maxLength(20)]],
      Call2 : [null, [Validators.minLength(2), Validators.maxLength(20)]],
      })
   }

   register()
    {
    if(this.registerForm.invalid)
        {
        //Si l'entièreté du formulaire est invalide, on va marquer tous les champos comme touchés
        this.registerForm.markAllAsTouched();
        console.log("not valid form");
        }
    else
        {
          if(this._tokenService.getUserId())
          {

            console.log("valid form");
            let custAdr =new Array<Adr>;
            let cust=new Customer(
            0,
            this.registerForm.value.FirstName,
            this.registerForm.value.LastName,
            this.registerForm.value.Email,
            this.registerForm.value.Call1,
            this.registerForm.value.Call2,
            new Date(),
            this._tokenService.getUserId(),
    
            //parseInt(localStorage.getItem("IdUser")as string),
            custAdr);
            //on insert l utilisateur et on remonte vers le front l id qui a ete generrer
            this._customerService.CreateCustomer(cust).subscribe(
              {
              next:(data:number)=>{this.idcust=data},
              error:{},
              complete:()=>{this._router.navigate(["customer/show/"+this.idcust])}
              }
              );
    
            //console.log(this.idcust);
          }
          else console.log("UserId Invalid");
          

      
        }
    }
}
