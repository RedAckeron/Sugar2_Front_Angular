import { TmplAstVariable } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  FindCustomerForm : FormGroup;
  constructor(private _builder : FormBuilder,private _customerService:CustomerService)
  {
    //On crée un nouveau formulaire grâce à notre FormBuilder et on le stocke dans notre propriété registerForm
    this.FindCustomerForm = this._builder.group({
      FormFindCustomer : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      })
  }

  ListFindedCustomer!:Customer[];

GetListCustomer()
  {
if(this.FindCustomerForm.controls['FormFindCustomer'].value!="")
{
  this._customerService.FindCustomers(this.FindCustomerForm.controls['FormFindCustomer'].value).subscribe((data)=>this.ListFindedCustomer=data);
}
else
{
//si la case de recherche est vide on vide le tableau de recherche
  this.ListFindedCustomer=[];
}
  }

  showcustomer(){


  console.log(this.FindCustomerForm.value['FormFindCustomer']);


    console.log("redirection vers la page du client : ");
  }
}

//this._customerService.ReadLastCustomers("j").subscribe((data)=>this.Customers=data);
