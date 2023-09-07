import { Component, Input } from '@angular/core';
import { OdpLight } from 'src/app/models/odp';
import { OdpService } from 'src/app/Services/odp.service';

@Component({
  selector: 'app-odp',
  templateUrl: './odp.component.html',
  styleUrls: ['./odp.component.scss']
})
export class OdpComponent {

  @Input() IdCustomer!:number;

  ListOdp : OdpLight[]=[];

  constructor(private _odpService:OdpService){}
  ngOnInit(): void
  {
    //console.log("IDCUST : "+this.Idcustomer);
    this._odpService.ReadAllOdpLight(this.IdCustomer).subscribe(
      {
        next:(data:OdpLight[])=>
          {
            this.ListOdp=data;

          },
        complete:()=>
        {
          //console.table(this.ListOdp);
        }
      })
  }
}
