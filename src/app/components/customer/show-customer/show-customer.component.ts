import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { forkJoin } from 'rxjs';
import { Customer } from 'src/app/models/CustomerModel';
import { CustomerSummary } from 'src/app/models/customerSummary';
import { CmdService } from 'src/app/Services/cmd.service';
import { CustomerService } from 'src/app/Services/customer.service';
import { DlcService } from 'src/app/Services/dlc.service';
import { OdpService } from 'src/app/Services/odp.service';
import { TokenService } from 'src/app/Services/Token.service';
import { UserService } from 'src/app/Services/user.service';
import { OdpLight } from 'src/app/models/odp';
import { FctService} from 'src/app/services/fct.service';
import { RprService } from 'src/app/services/rpr.service';
import { Adr } from 'src/app/models/AdrModel';
import { AddressService } from 'src/app/services/address.service';

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
  //address!:Array<CustomerAddress>;
  IdCust!:number;//a remplacer par un parametre
  IdUser!:number;
  Adrs:Adr[]=[];

  constructor(
    private messageService: MessageService,
    private _customerService:CustomerService,
    private _tokenService:TokenService,
    private _active_router:ActivatedRoute,
    private _router:Router,
    private _userService:UserService,    
    private _adrService:AddressService,
    private _odpService:OdpService,
    private _cmdService:CmdService,
    private _dlcService:DlcService,
    private _fctService:FctService,
    private _rprService:RprService
    )
    {
    this.IdUser=_tokenService.getUserId();

    if(_active_router.snapshot.params['id']!=null)
      {
        this.IdCust=_active_router.snapshot.params['id'];
        _userService.SetCurrentCustomer(_active_router.snapshot.params['id'])
      }
    else
      {
        _router.navigate(['customer/list']);
      }
    }

ngOnInit(): void
  {
    this._customerService.ReadCustomerSummary(this.IdCust).subscribe(data => {this.CustomerSummary=data;console.table(this.CustomerSummary)});
    this._customerService.ReadCustomer(this.IdCust).subscribe(data => {this.CurrentCustomer=data});
  }

  AddAdr(IdUser:number,IdCustomer:number)
    {
     this._adrService.CreateCustomerAddress(IdUser,IdCustomer).subscribe(data=>{
      if(data==1)
        {
          this._customerService.ReadCustomerSummary(this.IdCust).subscribe(data =>this.CustomerSummary=data);
          
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'adresse ajouté' });
        }
      else this.messageService.add({ severity: 'error', summary: 'Echec', detail: 'Adresse non ajouté' });
    });
    }
  AddOdp(IdUser:number,IdCustomer:number)
    {
      this._odpService.AddOdp(IdUser,IdCustomer).subscribe(data=>{
        if(data==1)
          {
            this._customerService.ReadCustomerSummary(this.IdCust).subscribe(data =>this.CustomerSummary=data);
            
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
            this._customerService.ReadCustomerSummary(this.IdCust).subscribe(data =>this.CustomerSummary=data);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Bon de commande ajouté' });
          }
        else this.messageService.add({ severity: 'error', summary: 'Echec', detail: 'Bon de commande non ajouté' });

    })
    }
  AddFct(IdUser:number,IdCustomer:number)
    {
      this._fctService.AddFct(IdUser,IdCustomer).subscribe(data=>{

        if(data==1)
          {
            this._customerService.ReadCustomerSummary(this.IdCust).subscribe(data =>this.CustomerSummary=data);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Download Content ajouté' });
          }
        else this.messageService.add({ severity: 'error', summary: 'Echec', detail: 'Download Content non ajouté' });
    })
    }
  AddRpr(IdUser:number,IdCustomer:number)
    {
      this._rprService.AddRpr(IdUser,IdCustomer).subscribe(data=>{

        if(data==1)
          {
            this._customerService.ReadCustomerSummary(this.IdCust).subscribe(data =>this.CustomerSummary=data);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Repair ajouté' });
          }
        else this.messageService.add({ severity: 'error', summary: 'Echec', detail: 'Repair non ajouté' });
      })
    }
  AddDlc(IdUser:number,IdCustomer:number)
    {
      this._dlcService.AddDlc(IdUser,IdCustomer).subscribe(data=>{

        if(data==1)
          {
            this._customerService.ReadCustomerSummary(this.IdCust).subscribe(data =>this.CustomerSummary=data);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Download Content ajouté' });
          }
        else this.messageService.add({ severity: 'error', summary: 'Echec', detail: 'Download Content non ajouté' });
    })
    }
 }
