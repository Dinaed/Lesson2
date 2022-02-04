import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  taskList:string[] = ['go in work','go in gym','go in shop'];
  
  newTask:string = '';
     
  addTask(){
    if (this.newTask === ''){
      return
    }
    else{
      this.taskList.push(this.newTask);
      this.newTask = '';
    }
  }
}
