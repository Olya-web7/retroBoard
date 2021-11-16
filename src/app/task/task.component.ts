import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})


export class TaskComponent {
  enteredContent = '';
  enteredTitle = '';
  @Output() taskCreated = new EventEmitter();

  onAddTask() {
    const task: Task = { title: this.enteredTitle, content: this.enteredContent }
    this.taskCreated.emit(task);
  }
}
