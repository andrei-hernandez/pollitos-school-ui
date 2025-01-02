import { Routes } from '@angular/router'
import { MainComponent } from './layout/main/main.component'

export const routes: Routes = [
  {
    path : '',
    component: MainComponent,
    children: [
      {
      path: 'instructions',
      loadComponent: () => import('./features/pages/instructions/instructions.component')
      },
      {
        path: '',
        loadComponent: () => import('./features/pages/dashboard/school-dashboard/school-dashboard.component')
      },
      {
        path: 'menu/:school',
        loadComponent: () => import('./features/pages/dashboard/menu-dashboard/menu-dashboard.component')
      },
      {
        path: 'students/:school',
        loadComponent: () => import('./features/pages/dashboard/students-dashboard/students-dashboard.component')
      },
      {
        path: 'addStudent/:school',
        loadComponent: () => import('./features/students/pages/created-student/created-student.component')
      },
      {
        path: 'listStudent/:school',
        loadComponent: () => import('./features/students/pages/list/list.component')
      },
      {
        path: 'courses/:school',
        loadComponent: () => import('./features/pages/dashboard/course-dashboard/course-dashboard.component')
      },
      {
        path: 'addCourse/:school',
        loadComponent: () => import('./features/courses/pages/created/created.component')
      },
      {
        path: 'listCourses/:school',
        loadComponent: () => import('./features/courses/list/list-courses/list-courses.component')
      },
      {
        path: 'grades/:school',
        loadComponent: () => import('./features/pages/dashboard/grade-dashboard/grade-dashboard.component')
      },
      {
        path: 'addGrades/:school',
        loadComponent: () => import('./features/grades/pages/created/created.component')
      },
      {
        path: 'listStudentId/:school',
        loadComponent: () => import('./features/grades/pages/list/list.component')
      }
    ]
  }
]