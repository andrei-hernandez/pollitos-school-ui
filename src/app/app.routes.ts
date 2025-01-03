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
    path: 'GerardoInstitute',
    loadComponent: () =>
      import('./features/gerardoinstitute/pages/main/gerardoinstitute.component').then(m => m.GerardoinstituteComponent),
    children: [
      {
        path: 'student',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            loadComponent: () =>
              import('./features/student/pages/list-student/list-student.component').then(m => m.ListStudentComponent)
          },
          {
            path: 'create',
            loadComponent: () =>
              import('./features/student/pages/create-student/create-student.component').then(m => m.CreateStudentComponent)
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import('./features/student/pages/edit-student/edit-student.component').then(m => m.EditStudentComponent)
          }
        ]
      },
      {
        path: 'course',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            loadComponent: () =>
              import('./features/course/pages/list-course/list-course.component').then(m => m.ListCourseComponent)
          },
          {
            path: 'create',
            loadComponent: () =>
              import('./features/course/pages/create-course/create-course.component').then(m => m.CreateCourseComponent)
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import('./features/course/pages/edit-course/edit-course.component').then(m => m.EditCourseComponent)
          }
        ]
      },
      {
        path: 'grade',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            loadComponent: () =>
              import('./features/grade/pages/list-grade/list-grade.component').then(m => m.ListGradeComponent)
          },
          {
            path: 'list/:id',
            loadComponent: () =>
              import('./features/grade/pages/view-grade/view-grade.component').then(m => m.ViewGradeComponent)
          },
          {
            path: 'create',
            loadComponent: () =>
              import('./features/grade/pages/create-grade/create-grade.component').then(m => m.CreateGradeComponent)
          }
        ]
      }
    ]
  },
  {
    path: 'ZetCollege',
    loadComponent: () =>
      import('./features/zetcollege/pages/main/zetcollege.component').then(m => m.ZetcollegeComponent),
    children: [
      {
        path: 'student',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            loadComponent: () =>
              import('./features/student/pages/list-student/list-student.component').then(m => m.ListStudentComponent)
          },
          {
            path: 'create',
            loadComponent: () =>
              import('./features/student/pages/create-student/create-student.component').then(m => m.CreateStudentComponent)
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import('./features/student/pages/edit-student/edit-student.component').then(m => m.EditStudentComponent)
          }
        ]
      },
      {
        path: 'course',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            loadComponent: () =>
              import('./features/course/pages/list-course/list-course.component').then(m => m.ListCourseComponent)
          },
          {
            path: 'create',
            loadComponent: () =>
              import('./features/course/pages/create-course/create-course.component').then(m => m.CreateCourseComponent)
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import('./features/course/pages/edit-course/edit-course.component').then(m => m.EditCourseComponent)
          }
        ]
      },
      {
        path: 'grade',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            loadComponent: () =>
              import('./features/grade/pages/list-grade/list-grade.component').then(m => m.ListGradeComponent)
          },
          {
            path: 'list/:id',
            loadComponent: () =>
              import('./features/grade/pages/view-grade/view-grade.component').then(m => m.ViewGradeComponent)
          },
          {
            path: 'create',
            loadComponent: () =>
              import('./features/grade/pages/create-grade/create-grade.component').then(m => m.CreateGradeComponent)
          }
        ]
      }
    ]
  }
]
