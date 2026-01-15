import { Component } from '@angular/core';
import { NavbarComponent } from "../../../../shared/components/navbar/navbar.component";
import { Task } from '../../models/tasks.model';
import { TasksService } from '../../services/tasks.service';

import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AddTaskDialogComponent } from '../../components/add-task-dialog/add-task-dialog.component';
@Component({
  selector: 'app-task-list',
  imports: [NavbarComponent, CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  tasks: Task[] = [];
  displayedColumns: string[] = ['title', 'status', 'priority', 'dueDate'];
  constructor(
    private tasksService: TasksService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  openAddTaskDialog(): void {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((newTask) => {
      if (newTask) {
        this.tasks = [...this.tasks, newTask];
      }
    });
  }

}
