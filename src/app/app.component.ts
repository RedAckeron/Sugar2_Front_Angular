import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  IdUser!:string|null;
  title = 'Sugar2_Angular';
  ngOnInit(): void {
  }
}
