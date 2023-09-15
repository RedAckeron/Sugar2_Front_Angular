import { Component, Input } from '@angular/core';
import { CustomerSummary } from 'src/app/models/customerSummary';
import { OdpLight } from 'src/app/models/odp';
import { OdpService } from 'src/app/Services/odp.service';

@Component({
  selector: 'app-odp',
  templateUrl: './odp.component.html',
  styleUrls: ['./odp.component.scss']
})
export class OdpComponent {

  @Input() CustomerSummary!:CustomerSummary;


  constructor(){}
 
}
