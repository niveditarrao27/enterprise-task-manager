import { createReducer, on } from '@ngrx/store';
import { initialTaskState } from './task.state';
import * as TaskActions from './task.actions';

export const taskReducer = createReducer(
    initialTaskState,

    on(TaskActions.loadTasksSuccess, (state, { tasks }) => ({
        ...state,
        tasks
    }))
);
