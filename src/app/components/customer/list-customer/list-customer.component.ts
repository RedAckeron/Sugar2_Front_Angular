import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/CustomerModel';
import { CustomerService } from 'src/app/Services/customer.service';

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
  this._customerService.ReadLastCustomers().subscribe((data)=>{this.Customers=data;console.table(this.Customers)});
  }
}
