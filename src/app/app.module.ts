import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

import { FooterComponent } from './shared/components/footer/footer.component';
import { ProfilComponent } from './components/user/profil/profil.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ShowCustomerComponent } from './components/customer/show-customer/show-customer.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { AddCommandComponent } from './components/command/add-command/add-command.component';
import { ShowCommandComponent } from './components/command/show-command/show-command.component';
import { LobbyComponent } from './components/Admin/lobby/lobby.component';
import { HttpClientModule } from '@angular/common/http';
import { ListCustomerComponent } from './components/customer/list-customer/list-customer.component';
import { HomeComponent } from './components/Home/home.component';
import { NotFoundComponent } from './components/Not-found/not-found.component';
import { Button, ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { OdpComponent } from './components/customer/show-customer/odp/odp.component';
import { FctComponent } from './components/customer/show-customer/fct/fct.component';
import { RprComponent } from './components/customer/show-customer/rpr/rpr.component';
import { DlcComponent } from './components/customer/show-customer/dlc/dlc.component';
import { CmdComponent } from './components/customer/show-customer/cmd/cmd.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabPanel, TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { CoordComponent } from './components/customer/show-customer/coord/coord.component';
import {AccordionModule} from 'primeng/accordion';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { LoginComponent } from './components/Auth/login/login.component';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProfilComponent,
    RegisterComponent,
    ShowCustomerComponent,
    AddCustomerComponent,
    AddCommandComponent,
    ShowCommandComponent,
    LobbyComponent,
    ListCustomerComponent,
    HomeComponent,
    NotFoundComponent,
    OdpComponent,
    FctComponent,
    RprComponent,
    DlcComponent,
    CmdComponent,
    CoordComponent,
    LoginComponent,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    NgbModule,
    ToastModule,
    SplitButtonModule,
    TabViewModule,
    TagModule,
    AccordionModule,
    MenubarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
