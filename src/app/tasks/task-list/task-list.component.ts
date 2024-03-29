import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Task } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  private tasksSub!: Subscription; 

  constructor(public TasksService: TasksService) { }
  ngOnInit() {
    this.tasks = this.TasksService.getTasks();
    this.tasksSub = this.TasksService.getTaskUpdateListener()
      .subscribe((tasks: Task[]) => {
        this.tasks = tasks;
      });
  }

  ngOnDestroy() {
    this.tasksSub.unsubscribe();
  }
}
