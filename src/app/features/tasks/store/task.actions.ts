import { createAction, props } from '@ngrx/store';
import { Task } from '../models/tasks.model';

export const loadTasks = createAction('[Tasks] Load Tasks');

export const loadTasksSuccess = createAction(
    '[Tasks] Load Tasks Success',
    props<{ tasks: Task[] }>()
);
