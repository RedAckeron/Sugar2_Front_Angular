import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { forkJoin } from 'rxjs';
import { Customer } from 'src/app/Models/Customer';
import { CustomerSummary } from 'src/app/Models/CustomerSummary';
import { CustomerAddress } from 'src/app/Models/customerAddress';
import { AddressService } from 'src/app/Services/address.service';
import { CmdService } from 'src/app/Services/cmd.service';
import { CustomerService } from 'src/app/Services/customer.service';
import { OdpService } from 'src/app/Services/odp.service';
import { TokenService } from 'src/app/Services/token.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  providers:[MessageService],
  styleUrls: ['./show-customer.component.scss']
})
export class ShowCustomerComponent implements OnInit
  {
  CurrentCustomer!:Customer;
  CustomerSummary!:CustomerSummary;
  address!:Array<CustomerAddress>;
  IdCust!:number;//a remplacer par un parametre
  IdUser!:number;

  constructor(
    private messageService: MessageService,
    private _customerService:CustomerService,
    private _tokenService:TokenService,
    private _addressService:AddressService,
    private _active_router:ActivatedRoute,
    private _router:Router,
    private _userService:UserService,
    private _odpService:OdpService,
    private _cmdService:CmdService
    )
    {
      this.IdUser=parseInt(_tokenService.getToken()??"");

    if(_active_router.snapshot.params['id']!=null)
      {
        this.IdCust=_active_router.snapshot.params['id'];
        _userService.SetCurrentCustomer(_active_router.snapshot.params['id'])
        //sessionStorage.setItem('CurrentCustomer',this.IdCust.toString());
        //console.log("Id Customer : "+_active_router.snapshot.params['id']);
      }
    else
      {
        _router.navigate(['customer/list']);
      }
    }
ngOnInit(): void
  {
forkJoin([
    this._customerService.ReadCustomer(this.IdCust),
    this._customerService.ReadCustomerSummary(this.IdCust),
    //this._addressService.ReadAllCustomerAddress(this.IdCust)
]).subscribe(([cust,custSummary])=>
  {
  this.CurrentCustomer=cust;//customer
  this.CustomerSummary=custSummary;
  //console.table(this.CustomerSummary);
  //this.address=custadr;
  //console.log(this.CurrentCustomer);
  //this.CurrentCustomer.addresses=custAdr;
 });


  //
  //address
  //odp
  //cmd
  //fact
  //repair
  //dlc
  }



  AddAdr()
  {
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Adresse ajouté' });
  }

AddOdp(IdUser:number,IdCustomer:number)
  {
    this._odpService.AddOdp(IdUser,IdCustomer).subscribe(data=>{

      if(data==1)
        {
          this._customerService.ReadCustomerSummary(IdCustomer).subscribe(data=>this.CustomerSummary=data);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Offre de prix ajouté' });
        }
      else this.messageService.add({ severity: 'error', summary: 'Echec', detail: 'Offre de prix non ajouté' });

    });

  }
AddCmd(IdUser:number,IdCustomer:number)
  {
    this._cmdService.AddCmd(IdUser,IdCustomer).subscribe(data=>{

      if(data==1)
        {
          this._customerService.ReadCustomerSummary(IdCustomer).subscribe(data=>this.CustomerSummary=data);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Bon de commande ajouté' });
        }
      else this.messageService.add({ severity: 'error', summary: 'Echec', detail: 'Bon de commande non ajouté' });

  })
}
AddFct()
  {
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Facture ajouté' });
  }
AddRpr()
  {
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Réparation ajouté' });
  }
AddDlc()
  {
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Download content ajouté' });
  }

  //this._customerService.GetCustomer(1).subscribe((data)=>this.CurrentCustomer=data);



}
