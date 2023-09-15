import { Component, Input } from '@angular/core';
import { CustomerSummary } from 'src/app/models/customerSummary';

@Component({
  selector: 'app-rpr',
  templateUrl: './rpr.component.html',
  styleUrls: ['./rpr.component.scss']
})
export class RprComponent {
  @Input() CustomerSummary!:CustomerSummary;

}
