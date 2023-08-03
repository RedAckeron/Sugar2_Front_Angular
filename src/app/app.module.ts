import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo3Component } from './demos/demo3/demo3.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Demo4Component } from './demos/demo4/demo4.component';
import { FormsModule } from '@angular/forms';
import { Demo1Component } from './demos/demo1/demo1.component';
import { Demo2Component } from './demos/demo1/demo2/demo2.component';
import { Demo5Component } from './demos/demo5/demo5.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { Exo1Component } from './exos/exo1/exo1.component';
import { Exo2Component } from './exos/exo2/exo2.component';
import { Exo3Component } from './exos/exo3/exo3.component';
import { Exo4Component } from './exos/exo4/exo4.component';
import { Exo5Component } from './exos/exo5/exo5.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo3Component,
    Demo4Component,
    Demo1Component,
    Demo2Component,
    Demo5Component,
    HomeComponent,
    NavbarComponent,
    Exo1Component,
    Exo2Component,
    Exo3Component,
    Exo4Component,
    Exo5Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
