import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo3Component } from './demos/demo3/demo3.component';
import { Demo4Component } from './demos/demo4/demo4.component';
import { Demo1Component } from './demos/demo1/demo1.component';
import { Demo2Component } from './demos/demo1/demo2/demo2.component';
import { Demo5Component } from './demos/demo5/demo5.component';
import { Exo1Component } from './exos/exo1/exo1.component';
import { Exo2Component } from './exos/exo2/exo2.component';
import { Exo3Component } from './exos/exo3/exo3.component';
import { Exo4Component } from './exos/exo4/exo4.component';
import { Exo5Component } from './exos/exo5/exo5.component';

const routes: Routes = [
  {path : 'demos',children:
    [ 
    {path : 'demo1',component : Demo1Component},
    {path : 'demo2',component : Demo2Component},
    {path : 'demo3',component : Demo3Component},
    {path : 'demo4',component : Demo4Component},
    {path : 'demo5',component : Demo5Component},
    ]
  },
  {path : 'exos',children:
    [ 
    {path : 'exo1',component : Exo1Component},
    {path : 'ex02',component : Exo2Component},
    {path : 'exo3',component : Exo3Component},
    {path : 'exo4',component : Exo4Component},
    {path : 'exo5',component : Exo5Component},
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
