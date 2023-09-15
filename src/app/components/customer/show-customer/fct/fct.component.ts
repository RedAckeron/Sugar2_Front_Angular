import { Component, Input } from '@angular/core';
import { CustomerSummary } from 'src/app/models/customerSummary';

@Component({
  selector: 'app-fct',
  templateUrl: './fct.component.html',
  styleUrls: ['./fct.component.scss']
})
export class FctComponent {
  @Input() CustomerSummary!:CustomerSummary;

}
