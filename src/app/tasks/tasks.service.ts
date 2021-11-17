import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Task } from './task.model';

@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks: Task[] = [];
  private tasksUpdated = new Subject<Task[]>();

  constructor() { }

  getTasks() {
    return [...this.tasks];
  }

  getTaskUpdateListener() {
    return this.tasksUpdated.asObservable();
  }

  addTask(title: string, content: string) {
    const task: Task = { title: title, content: content };
    this.tasks.push(task);
    this.tasksUpdated.next([...this.tasks]);
  }
}
