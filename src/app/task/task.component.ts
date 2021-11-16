import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  newTask = '';
  enteredValue = '';

  constructor() {}

  ngOnInit(): void {}

  onAddTask() {
    this.newTask = this.enteredValue;
  }
}
