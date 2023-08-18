import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers:[MessageService],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private messageService: MessageService) {}

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
}
}
