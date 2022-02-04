import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SwitchComponent } from './switch/switch.component';
import { RenderingComponent } from './rendering/rendering.component';
import { TasksComponent } from './tasks/tasks.component';
import { CircleComponent } from './circle/circle.component';


@NgModule({
  declarations: [							
    AppComponent,
      CounterComponent,
      DynamicComponent,
      SwitchComponent,
      RenderingComponent,
      TasksComponent,
      CircleComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
