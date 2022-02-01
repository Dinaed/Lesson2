import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  title:string = 'I like change color!!!';

  red:any  = 0;
  green:any = 0;
  blue:any = 0;

  htmlRGB() {
    return (`rgb(${this.red},${this.green},${this.blue})`);
  }

}
