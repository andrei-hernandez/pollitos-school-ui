import {Routes} from '@angular/router'
import {InstructionsComponent} from './features/instructions/instructions.component'
import {HomeComponent} from './features/home/home.component'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'instructions',
    component: InstructionsComponent
  },
  {
    path: 'gerardoinstitute',
    loadComponent: () =>
      import('./features/gerardoinstitute/pages/main/gerardoinstitute.component').then(m => m.GerardoinstituteComponent),
    children: [
      {
        path: 'student/list',
        loadComponent: () => import('./features/gerardoinstitute/student/pages/list-student/list-student.component').then(m => m.ListStudentComponent)
      },
      {
        path: 'student',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'create',
            loadComponent: () =>
              import('./features/gerardoinstitute/student/pages/create-student/create-student.component').then(m => m.CreateStudentComponent)
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import('./features/gerardoinstitute/student/pages/edit-student/edit-student.component').then(m => m.EditStudentComponent)
          }
        ]
      }
    ]
  },
  {
    path: 'zetcollege',
    loadComponent: () => import('./features/zetcollege/main/zetcollege.component').then(m => m.ZetcollegeComponent)
  }
]
