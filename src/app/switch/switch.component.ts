import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  count:number = 0;

  case(){
    if(this.count <= 5){
      return 1;
    }
    else if(this.count > 5 && this.count < 10){
      return 2;
    }
    else{
      return 3;
    }
  }
}
