import { Task } from '../models/tasks.model';

export interface TaskState {
    tasks: Task[];
}

export const initialTaskState: TaskState = {
    tasks: []
};
