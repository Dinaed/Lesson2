import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Hello Angular';
  inputText:string = 'Text in input';

  circle:boolean = false;

  redCircle:boolean = false;

  taskList:string[] = ['go in work','go in gym','go in shop'];
  
  newTask:string = '';
     
  addTask(){
    this.taskList.push(this.newTask);
  }

  showCircle(){
    this.circle = !this.circle;
  }
  showRedCircle(){
    this.redCircle = !this.redCircle;
  }

  page:string = 'counter';

  changePage(pageType:string){
    if(pageType === 'counter'){
      this.page = 'counter';
    }
    else if (pageType === 'dynamic'){
       this.page = 'dynamic';
    }
    else {
      this.page = 'switch';
    }
  }
}
