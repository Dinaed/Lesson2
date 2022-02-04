import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Hello Angular';

  pages = [
    {
      name:'Counter',
      type:'counter',
    },
    {
      name:'Dynamic text',
      type:'dynamic',
    },
    {
      name:'Switch Case',
      type:'switch',
    },
    {
      name:'Rendering',
      type:'render',
    },
    {
      name:'Tasks',
      type:'task',
    },
    {
      name:'Circle',
      type:'circle',
    }
  ]

  page:string = 'counter';
}
