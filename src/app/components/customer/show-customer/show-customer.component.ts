import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { forkJoin } from 'rxjs';
import { Customer } from 'src/app/models/CustomerModel';
import { CustomerSummary } from 'src/app/models/customerSummary';
import { CustomerAddress } from 'src/app/models/customerAddress';
import { AddressService } from 'src/app/Services/address.service';
import { CmdService } from 'src/app/Services/cmd.service';
import { CustomerService } from 'src/app/Services/customer.service';
import { DlcService } from 'src/app/Services/dlc.service';
import { OdpService } from 'src/app/Services/odp.service';
import { TokenService } from 'src/app/Services/Token.service';
import { UserService } from 'src/app/Services/user.service';
import { OdpLight } from 'src/app/models/odp';

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
  QtAdr:number=0;
  Adrs:CustomerAddress[]=[];
  QtOdp:number=0;
  OdpsLight:OdpLight[]=[];
  QtCmd:number=0;
  QtFct:number=0;
  QtRpr:number=0;
  QtDlc:number=0;

  constructor(
    private messageService: MessageService,
    private _customerService:CustomerService,
    private _tokenService:TokenService,
    private _addressService:AddressService,
    private _active_router:ActivatedRoute,
    private _router:Router,
    private _userService:UserService,
    private _odpService:OdpService,
    private _cmdService:CmdService,
    private _dlcService:DlcService
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
    this.ReadCustomerSummary(this.IdCust);
    this.ReadCustomer(this.IdCust);
    /*
forkJoin([
    this._customerService.ReadCustomer(this.IdCust),
    this._customerService.ReadCustomerSummary(this.IdCust),
]).subscribe(([cust,custSummary])=>
  {
  this.CurrentCustomer=cust;//customer
  this.CustomerSummary=custSummary;
 });
 */
  }

  ReadCustomer(IdCust:number)
    {
      this._customerService.ReadCustomer(this.IdCust).subscribe(data=>this.CurrentCustomer=data);

    }
  ReadCustomerSummary(IdCust:number)
    {
      this._customerService.ReadCustomerSummary(IdCust).subscribe({
          next:(data)=>
            {
              console.table(data)
              this.CustomerSummary=data;
              this.QtAdr=data.cmdLights.length
              this.QtCmd=data.cmdLights.length
              this.QtOdp=data.odpLights.length
              //this.QtFct=data.fctLights.length
              //this.QtRpr=data.rprLights.length
              this.QtDlc=data.dlcLights.length
            },
          complete:()=>
          {
          }
        })




    //
    //data=>{this.CustomerSummary=data;});

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
          this.ReadCustomerSummary(IdCustomer);
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
          this.ReadCustomerSummary(IdCustomer);
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
AddDlc(IdUser:number,IdCustomer:number)
  {
    this._dlcService.AddDlc(IdUser,IdCustomer).subscribe(data=>{

      if(data==1)
        {
          this._customerService.ReadCustomerSummary(IdCustomer).subscribe(data=>this.CustomerSummary=data);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Download Content ajouté' });
        }
      else this.messageService.add({ severity: 'error', summary: 'Echec', detail: 'Download Content non ajouté' });
  })
  }
  //this._customerService.GetCustomer(1).subscribe((data)=>this.CurrentCustomer=data);



}
