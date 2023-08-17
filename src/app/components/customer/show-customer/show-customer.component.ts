import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Customer } from 'src/app/Models/customer';
import { CustomerAddress } from 'src/app/Models/customerAddress';
import { AddressService } from 'src/app/Services/address.service';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.scss']
})
export class ShowCustomerComponent implements OnInit {
  CurrentCustomer!:Customer;

  address!:Array<CustomerAddress>;
  IdCust:number=1;//a remplacer par un parametre
  constructor(private _customerService:CustomerService,private _addressService:AddressService,private _active_router:ActivatedRoute){
if(_active_router.snapshot.params['id']!=null)
{
  this.IdCust=_active_router.snapshot.params['id'];
  console.log("Id Customer : "+_active_router.snapshot.params['id']);
}
  }
ngOnInit(): void
  {
forkJoin([
    this._customerService.ReadCustomer(this.IdCust),
    this._addressService.ReadAllCustomerAddress(this.IdCust)
]).subscribe(([cust,custadr])=>
  {
  this.CurrentCustomer=cust;//customer
  this.address=custadr;
  console.log(this.CurrentCustomer);
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
