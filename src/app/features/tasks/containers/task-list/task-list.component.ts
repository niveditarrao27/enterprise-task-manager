import { Component } from '@angular/core';
import { NavbarComponent } from "../../../../shared/components/navbar/navbar.component";
import { Task } from '../../models/tasks.model';
import { TasksService } from '../../services/tasks.service';

import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-task-list',
  imports: [NavbarComponent, CommonModule, MatTableModule, MatChipsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  tasks: Task[] = [];
  displayedColumns: string[] = ['title', 'status', 'priority', 'dueDate'];
  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

}
