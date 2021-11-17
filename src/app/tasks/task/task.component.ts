import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})

export class TaskComponent {
  enteredContent = '';
  enteredTitle = '';

  constructor(public tasksService: TasksService) {}

  onAddTask(form: NgForm) {
    if (form.invalid) {
      return;
    }    
    this.tasksService.addTask(form.value.title, form.value.content);
  }
}
