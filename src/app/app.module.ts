import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SwitchComponent } from './switch/switch.component';


@NgModule({
  declarations: [				
    AppComponent,
      CounterComponent,
      DynamicComponent,
      SwitchComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
