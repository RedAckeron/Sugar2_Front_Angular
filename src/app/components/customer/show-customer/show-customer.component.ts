import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.scss']
})
export class ShowCustomerComponent implements OnInit {
  CurrentCustomer!:Customer;
  constructor(private _customerService:CustomerService){}

ngOnInit(): void 
  {
forkJoin([
  this._customerService.GetCustomer(1)
  
]).subscribe(([cust])=>
  {
  this.CurrentCustomer=cust;//customer
  //address
  //odp
  //cmd
  //fact
  //repair
  //dlc
  }




  //this._customerService.GetCustomer(1).subscribe((data)=>this.CurrentCustomer=data);
 
  )
  }
}
