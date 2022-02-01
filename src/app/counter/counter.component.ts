import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  colors:string[] = ['inherit','aqua', 'olive', 'yellow', 'lime', 'teal', 'brown', 'cyan', 'green', 'red'];

  counter:number = 0;

  someDynamicText:string = 'Default dynamic text';
  dynamicText:string = 'Some dynamic text';
  anotherDynamicText:string = 'Another some dynamic text';
  defDymanicTest:string = 'Default dynamic text'
  textRender:boolean = true;

  increment(){
    this.counter = this.counter + 1;
    if(this.counter > 9){
      this.counter = 0;
    }
    this.showText();
  }
  decrement(){
    this.counter = this.counter - 1;
    if(this.counter < -9){
      this.counter = 0;
    }
    this.showText();
  }
  showText(){
    if(this.counter > 1){
      this.someDynamicText = this.dynamicText;
      this.textRender = true;
    }
    else if(this.counter < -1){
      this.someDynamicText = this.anotherDynamicText;
      this.textRender = false;
    }
    else {
      this.someDynamicText = this.defDymanicTest;
      this.textRender = true;
    }
  }
}
