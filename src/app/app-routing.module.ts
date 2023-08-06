import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowCustomerComponent } from './components/customer/show-customer/show-customer.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { AddCommandComponent } from './components/command/add-command/add-command.component';
import { ShowCommandComponent } from './components/command/show-command/show-command.component';
import { ListCustomerComponent } from './components/customer/list-customer/list-customer.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path : '',component : HomeComponent},
  {
    path : 'customer',children:
    [ 
    {path : 'list',component : ListCustomerComponent},
    {path : 'add',component : AddCustomerComponent},
    {path : 'show',component : ShowCustomerComponent},
    ]
  },
  {
    path : 'odp',children:
    [ 
    {path : 'add',component : AddCommandComponent},
    {path : 'show',component : ShowCommandComponent},
    ]
  },
  {
    path : 'cmd',children:
    [ 
    {path : 'add',component : AddCommandComponent},
    {path : 'show',component : ShowCommandComponent},
    ]
  },
  {
    path : 'fct',children:
    [ 
    {path : 'add',component : AddCommandComponent},
    {path : 'show',component : ShowCommandComponent},
    ]
  },
  {
    path : 'admin',children:
    [ 
      {path : 'add',component : AddCommandComponent},
      {path : 'show',component : ShowCommandComponent},
    ]
  },
  {path : 'exos',children:
    [ 
      {path : 'add',component : AddCommandComponent},
      {path : 'show',component : ShowCommandComponent},
    ]
  },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
