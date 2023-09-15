import { Component, Input, OnInit } from '@angular/core';
import { CmdLight } from 'src/app/models/CmdModel';
import { CustomerSummary } from 'src/app/models/customerSummary';
import { CmdService } from 'src/app/Services/cmd.service';

@Component({
  selector: 'app-cmd',
  templateUrl: './cmd.component.html',
  styleUrls: ['./cmd.component.scss']
})
export class CmdComponent{

  @Input() CustomerSummary!:CustomerSummary;


  constructor(){}
 
  
}
