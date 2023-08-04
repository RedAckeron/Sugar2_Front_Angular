import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowCustomerComponent } from './components/customer/show-customer/show-customer.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { AddCommandComponent } from './components/command/add-command/add-command.component';
import { ShowCommandComponent } from './components/command/show-command/show-command.component';

const routes: Routes = [
  {
    path : 'customer',children:
    [ 
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
