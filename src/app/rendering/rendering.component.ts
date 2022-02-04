import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rendering',
  templateUrl: './rendering.component.html',
  styleUrls: ['./rendering.component.scss']
})
export class RenderingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  inputText:string = 'Text in input';

}
