import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path: 'change-detention',
                title: 'Change Detection',
                loadComponent: () => import('./dashboard/pages/change-detenction/change-detenction.component')
            },
            {
                path: 'control-flow',
                title: 'Control Flow',
                loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component')
            },
            {
                path: 'defer-options',
                title: 'Defer Options',
                loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component')
            },
            {
                path: 'defer-views',
                title: 'Defer Views',
                loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component')
            },
            {
                path: 'user/:id',
                title: 'User',
                loadComponent: () => import('./dashboard/pages/user/user.component')
            },
            {
                path: 'users',
                title: 'Users',
                loadComponent: () => import('./dashboard/pages/users/users.component')
            },
            {
                path: 'view-transition',
                title: 'View Transition',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component')
            },
            {
                path: 'view-transition2',
                title: 'View Transition 2',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition2.component')
            },
            {
                path: '',
                redirectTo: '/dashboard/control-flow',
                pathMatch: 'full'
            }

        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
