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

  red:number  = 0;
  green:number = 0;
  blue:number = 0;

  htmlRGB() {
    return (`rgb(${this.red},${this.green},${this.blue})`);
  }

}
