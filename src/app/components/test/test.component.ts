import { Component, OnInit } from '@angular/core';
import { ApiListPays } from 'src/app/models/Api-ListPays';
import { ApiExterneService } from 'src/app/services/api-externe.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {  
  listPays:Array<ApiListPays>=new Array<ApiListPays>

constructor(private _apiExterneService:ApiExterneService){
}
ngOnInit(): void {
  this._apiExterneService.getPays().subscribe((data:any)=>
  {
    
    


  this.listPays=data.result.result;
  console.table(this.listPays);

   
    
   
   
    //this.listPays=data.result.result;
    //console.table(this.listPays)
  });
}
}
