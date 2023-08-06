import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { CustomerAddress } from 'src/app/models/customerAddress';
import { AddressService } from 'src/app/services/address.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.scss']
})
export class ShowCustomerComponent implements OnInit {
  CurrentCustomer!:Customer;
  step:number=1;
  address!:Array<CustomerAddress>;
  IdCust:number=1;//a remplacer par un parametre 
  constructor(private _customerService:CustomerService,private _addressService:AddressService){}
ngOnInit(): void 
  {
forkJoin([
    this._customerService.ReadCustomer(this.IdCust),
    this._addressService.ReadAllCustomerAddress(this.IdCust)
]).subscribe(([cust,custadr])=>
  {
  this.CurrentCustomer=cust;//customer
  console.log(this.CurrentCustomer);
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
