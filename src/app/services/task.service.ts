import { Injectable } from '@angular/core';
import {TASKS} from '../mock-task';
import { Task } from '../Task';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask(): Observable<Task[]>{
    const tasks = of(TASKS);
    return tasks;
  }
}
