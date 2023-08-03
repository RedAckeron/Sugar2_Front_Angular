import { Component } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component {
  IsEnabled:boolean=false;
  msgbox:string="";
  passwd:string="";
  ShowPassword:boolean=false;

SwapshowPassword()
{
  if (this.ShowPassword==true)this.ShowPassword=false
  else this.ShowPassword=true;
}

Changevalue(text:Event):void
  {
    this.msgbox= (text.target as HTMLInputElement).value;
  }
}


