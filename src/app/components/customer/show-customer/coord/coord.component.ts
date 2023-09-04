import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { concatWith } from 'rxjs';
import { Customer } from 'src/app/Models/Customer';
import { CustomerAddress } from 'src/app/Models/customerAddress';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-coord',
  templateUrl: './coord.component.html',
  styleUrls: ['./coord.component.scss'],
  providers: [MessageService]

})
export class CoordComponent implements OnInit{
  @Input() IdCustomer!:number;
  customer!:Customer;

  registerForm! : FormGroup;
  constructor(private _builder : FormBuilder,private _customerService : CustomerService,private _router:Router, private _messageService:MessageService) {

   }

ngOnInit(): void {

  this._customerService.ReadCustomer(this.IdCustomer).subscribe(
    {
      next:(data:Customer)=>{this.customer=data},
      complete:()=>
      {
      this.registerForm = this._builder.group({
        FirstName : [this.customer.firstName, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
        LastName : [this.customer.lastName, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
        Email : [this.customer.email, [Validators.required, Validators.email]],
        Call1 : [this.customer.call1, [Validators.minLength(2), Validators.maxLength(20)]],
        Call2 : [this.customer.call2, [Validators.minLength(2), Validators.maxLength(20)]],
        })
      }
    })
}

   update()
    {
      console.log("register");
    if(this.registerForm.invalid)
        {
        //Si l'entièreté du formulaire est invalide, on va marquer tous les champos comme touchés
        this.registerForm.markAllAsTouched();
        console.log("not valid form");

        }
    else
        {
        console.log("valid form");
        let custAdr =new Array<CustomerAddress>;
        let cust=new Customer(
        this.customer.id,
        this.registerForm.value.FirstName,
        this.registerForm.value.LastName,
        this.registerForm.value.Email,
        this.registerForm.value.Call1,
        this.registerForm.value.Call2,
        this.customer.dtIn,
        1,
        custAdr);
        console.table(cust);

        //on insert l utilisateur et on remonte vers le front l id qui a ete generrer
          let result:number=20;
          this._customerService.UpdateCustomer(cust).subscribe((data)=>{
          result=data;
          if(result==1)this._messageService.add({ severity: 'success', summary: 'Success', detail: 'La fiche a été mise a jours' });
          else this._messageService.add({ severity: 'error', summary: 'Error', detail: 'La fiche n a pas été mise a jours' });
        });
        }

    }

}
