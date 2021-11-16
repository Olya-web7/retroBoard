import { Component, EventEmitter, Output } from '@angular/core';

// export interface Task {
//   title: string,
//   content: string
// }
  
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
    const task = { title: this.enteredTitle, content: this.enteredContent }
    this.taskCreated.emit(task);
  }
}
