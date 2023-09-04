import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Customer } from 'src/app/Models/Customer';
import { CustomerAddress } from 'src/app/Models/customerAddress';
import { CustomerService } from 'src/app/Services/customer.service';
import { AddressService } from 'src/app/Services/address.service';
import { CustomerSummary } from 'src/app/Models/CustomerSummary';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.scss']
})
export class ShowCustomerComponent implements OnInit
  {
  CurrentCustomer!:Customer;
  CustomerSummary!:CustomerSummary;
  address!:Array<CustomerAddress>;
  IdCust!:number;//a remplacer par un parametre

  constructor(private _customerService:CustomerService,private _addressService:AddressService,private _active_router:ActivatedRoute,private _router:Router)
    {
    if(_active_router.snapshot.params['id']!=null)
      {
        this.IdCust=_active_router.snapshot.params['id'];
        localStorage.setItem('CurrentCustomer',this.IdCust.toString());

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




  //this._customerService.GetCustomer(1).subscribe((data)=>this.CurrentCustomer=data);



}
