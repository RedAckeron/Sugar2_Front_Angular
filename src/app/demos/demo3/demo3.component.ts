import { Component } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component {
timer!:ReturnType<typeof setInterval>| null;
count:number =0;

start():void
{
  if(this.timer)return;
  this.timer =setInterval(()=>{this.count++;},1000);
}

stop():void
{
if(!this.timer)return;
clearInterval(this.timer);
this.timer=null;
}
reset():void
{
this.stop();
this.count=0;


}
}
