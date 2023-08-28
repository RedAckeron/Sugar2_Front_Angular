import { Component, OnInit } from '@angular/core';
import {  MessageService } from 'primeng/api';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]
})

export class HomeComponent implements OnInit{
  constructor(private messageService: MessageService) {}
  show() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
  ngOnInit(): void {
    localStorage.setItem('IdUser','1');
    localStorage.setItem('CurrentCustomer','1');

  }
}
