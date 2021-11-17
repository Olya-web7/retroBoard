import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task.model';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})

export class TaskComponent {
  enteredContent = '';
  enteredTitle = '';
  @Output() taskCreated = new EventEmitter<Task>();

  onAddTask(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const task: Task = { 
      title: form.value.title, 
      content: form.value.content 
    };
    this.taskCreated.emit(task);
  }
}
