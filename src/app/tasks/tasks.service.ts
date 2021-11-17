import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [];

  constructor() { }

  getTasks() {
    return [...this.tasks];
  }

  addTask(title: string, content: string) {
    const task: Task = { title: title, content: content };
    this.tasks.push(task);
  }
}
