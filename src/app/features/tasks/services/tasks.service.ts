import { Injectable } from '@angular/core';
import { Task } from '../models/tasks.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: Task[] = [
    {
      id: 1,
      title: 'Setup Angular project',
      description: 'Initialize Angular with Material and routing',
      status: 'DONE',
      priority: 'HIGH',
      dueDate: new Date()
    },
    {
      id: 2,
      title: 'Build Login Flow',
      description: 'Implement authentication and guards',
      status: 'IN_PROGRESS',
      priority: 'MEDIUM',
      dueDate: new Date()
    }
  ];

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

}
