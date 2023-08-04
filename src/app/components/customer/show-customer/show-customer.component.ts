import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.scss']
})
export class ShowCustomerComponent implements OnInit {
  //CurrentCustomer:Observable<Customer>=of();
  constructor(private _customerService:CustomerService){}

ngOnInit(): void 
  {
    
   // this.CurrentCustomer=this._customerService.Read(1);

    
  }
}
