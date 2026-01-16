import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { taskReducer } from './store/task.reducer'
import { TasksRoutingModule } from './tasks-routing.module';
import { provideState } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
  providers: [
    provideState('tasks', taskReducer)
  ]
})
export class TasksModule { }
