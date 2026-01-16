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
import { MatIcon } from "@angular/material/icon";
import { Store } from '@ngrx/store';
import { selectAllTasks } from '../../store/task.selectors';
import { Observable } from 'rxjs';
import * as TaskActions from '../../store/task.actions';
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
    MatNativeDateModule, MatIcon],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  // tasks: Task[] = [];
  tasks$: Observable<Task[]>;
  // displayedColumns: string[] = ['title', 'status', 'priority', 'dueDate'];
  displayedColumns = ['title', 'status', 'priority', 'dueDate', 'actions'];

  constructor(
    private tasksService: TasksService,
    private dialog: MatDialog,
    private store: Store
  ) {
    this.tasks$ = this.store.select(selectAllTasks);
  }

  ngOnInit(): void {
    // this.tasksService.getTasks().subscribe((tasks: Task[]) => {
    //   this.tasks = tasks;
    // });

    // this.store.dispatch(TaskActions.loadTasks());

    this.tasksService.getTasks().subscribe(tasks => {
      this.store.dispatch(TaskActions.loadTasksSuccess({ tasks }));
    });
  }


  openAddTaskDialog(): void {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((newTask) => {
      // if (newTask) {
      //   this.tasks = [...this.tasks, newTask];
      // }
    });
  }

  editTask(task: Task): void {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '400px',
      data: task
    });

    dialogRef.afterClosed().subscribe(updatedTask => {
      // if (updatedTask) {
      //   this.tasks = this.tasks.map(t =>
      //     t.id === updatedTask.id ? updatedTask : t
      //   );
      // }
    });
  }

  deleteTask(taskId: number): void {
    // this.tasks = this.tasks.filter(task => task.id !== taskId);
  }



}
