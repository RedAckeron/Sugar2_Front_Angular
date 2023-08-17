import { TmplAstVariable } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Customer } from 'src/app/Models/customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  FindCustomerForm : FormGroup;
  
  constructor(private _builder : FormBuilder,private _customerService:CustomerService,private _router : Router)
  {
    //On crée un nouveau formulaire grâce à notre FormBuilder et on le stocke dans notre propriété registerForm
    this.FindCustomerForm = this._builder.group({
      FormFindCustomer : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      IdUserSelected:[]  
    })
  }

  ListFindedCustomer!:Customer[];

GetListCustomer()
  {
    if(this.FindCustomerForm.controls['FormFindCustomer'].value!="")
    {
    
    this._customerService.FindCustomers(this.FindCustomerForm.controls['FormFindCustomer'].value).subscribe((data)=>{
      this.ListFindedCustomer=data;
      this.FindCustomerForm.get("IdUserSelected")?.setValue(this.ListFindedCustomer[0].id);
    });
    }
    else
    {
    //si la case de recherche est vide on vide le tableau de recherche
      this.ListFindedCustomer=[];
    }
  }

  showcustomer()
  {
  this._router.navigate(['customer/show/',this.FindCustomerForm.controls['IdUserSelected'].value])
  }
}

//this._customerService.ReadLastCustomers("j").subscribe((data)=>this.Customers=data);
