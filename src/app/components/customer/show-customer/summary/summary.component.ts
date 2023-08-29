import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Odp } from 'src/app/Models/Odp';
import { OdpService } from 'src/app/Services/odp.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  providers:[MessageService],
  styleUrls: ['./summary.component.scss']
})

export class SummaryComponent {

    constructor(private messageService: MessageService,_odpService:OdpService) {}

AddAdr()
  {

  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Adresse ajouté' });
  }

AddOdp()
  {

  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Offre de prix ajouté' });
  }
AddCmd()
  {
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Bon de commande ajouté' });
  }
AddFct()
  {
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Facture ajouté' });
  }
AddRpr()
  {
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Réparation ajouté' });
  }
AddDlc()
  {
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Download content ajouté' });
  }
}
