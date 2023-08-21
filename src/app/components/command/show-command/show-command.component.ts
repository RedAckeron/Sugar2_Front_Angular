import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-command',
  templateUrl: './show-command.component.html',
  styleUrls: ['./show-command.component.scss']
})
export class ShowCommandComponent implements OnInit {
  constructor(private _active_router:ActivatedRoute){}

  ngOnInit(): void {

}

}
