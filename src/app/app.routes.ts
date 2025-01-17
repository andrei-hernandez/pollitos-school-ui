import { Routes } from '@angular/router'
import {LayoutComponent} from './shared/pages/layout/layout.component'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: 'home',
        loadComponent: () => import('./shared/pages/home/home.component')
      },
      {
        path: 'students',
        loadComponent: () => import('./features/students/components/students/students.component')
      },
      {
        path: 'grades',
        loadComponent: () => import('./features/grades/components/grades-grid/grades-grid.component')
      },
      {
        path: 'courses',
        loadComponent: () => import('./features/courses/components/courses-grid/courses-grid.component')
      },
      {
        path: 'instructions',
        loadComponent: () => import('./features/pages/instructions/instructions.component')
      }
    ]
  }
]

