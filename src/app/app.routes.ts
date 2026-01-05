import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: 'dashboard',
        canActivate: [authGuard],
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
        path: 'tasks',
        canActivate: [authGuard],
        loadChildren: () => import('./features/tasks/tasks.module').then(m => m.TasksModule),
    },
    {
        path: 'users',
        canActivate: [authGuard],
        loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule),
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
