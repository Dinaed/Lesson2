import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  circle:boolean = false;

  redCircle:boolean = false;

  showCircle(){
    this.circle = !this.circle;
  }
  showRedCircle(){
    this.redCircle = !this.redCircle;
  }

}