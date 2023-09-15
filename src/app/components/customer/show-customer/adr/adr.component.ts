import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/Token.service';
import { CustomerService } from 'src/app/Services/customer.service';
import { Adr } from 'src/app/models/AdrModel';
import { ApiListPays } from 'src/app/models/Api-ListPays';
import { Customer } from 'src/app/models/CustomerModel';
import { CustomerSummary } from 'src/app/models/customerSummary';
import { AddressService } from 'src/app/services/address.service';
import { ApiExterneService } from 'src/app/services/api-externe.service';

@Component({
  selector: 'app-adr',
  templateUrl: './adr.component.html',
  styleUrls: ['./adr.component.scss']
})
export class AdrComponent implements OnInit {
  @Input() IdAdr!:number;
  
  //adrInfo!:string;
  currentAdr:Adr=new Adr();
  registerForm : FormGroup;
  listPays:Array<ApiListPays>=new Array<ApiListPays>
  constructor(private _builder : FormBuilder,private _router:Router,private _addressService:AddressService,private _apiExterneService:ApiExterneService) {
    //On crée un nouveau formulaire grâce à notre FormBuilder et on le stocke dans notre propriété registerForm

     this.registerForm = this._builder.group({
      adrInfo : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      adrRue : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      adrNo : [null, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      adrVille : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      adrCp : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],      
      adrPays : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
       })
   }
ngOnInit(): void {
  
  this._addressService.ReadAddress(this.IdAdr).subscribe(data=>{this.currentAdr=data;console.table(data)});
  //this._apiExterneService.getPays().subscribe((data:any)=>{this.listPays=data.result.result;console.table(this.listPays)});
}
   register()
    {
      /*
      console.log("register");
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
    /*
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
        */
    }
    
}
