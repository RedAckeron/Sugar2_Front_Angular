import { Component, Input } from '@angular/core';
import { CustomerSummary } from 'src/app/models/customerSummary';

@Component({
  selector: 'app-dlc',
  templateUrl: './dlc.component.html',
  styleUrls: ['./dlc.component.scss']
})
export class DlcComponent {
@Input() CustomerSummary!:CustomerSummary;
}
