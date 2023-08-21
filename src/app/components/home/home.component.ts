import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]

})
export class HomeComponent  {
  items: MenuItem[] | undefined;

  constructor(private messageService: MessageService) {}
  show() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
}
