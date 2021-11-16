import { Component } from '@angular/core';

import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RetroBoard';
  storedTasks: Task[] = [];

  onTaskAdded(task: any) {
    this.storedTasks.push(task);
  }
}
