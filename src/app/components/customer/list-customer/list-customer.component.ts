import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})

export class ListCustomerComponent implements OnInit {
  Customers!:Customer[];
  constructor(private _customerService:CustomerService){}

ngOnInit(): void 
  {
  this._customerService.ReadLastCustomers("j").subscribe((data)=>this.Customers=data);
 
  }
}