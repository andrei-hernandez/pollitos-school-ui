import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: 'home',
    loadComponent: () => import('./features/Home/pages/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'gerardoInstitute',
    loadComponent: () => import('./features/Institute/pages/gerardo-Institute/gerardoInstitute.component').then(m => m.GerardoInstituteComponent),
    children: [
      {
        path: '',
        pathMatch: "full",
        redirectTo: "students"
      },
      {
        path: 'students',
        loadComponent: () => import('./features/Institute/pages/students/students.component').then(m => m.StudentsComponent),
      },
      {
        path: 'courses',
        loadComponent: () => import('./features/Institute/pages/courses/courses.component').then(m => m.CoursesComponent),
      },
      {
        path: 'grades',
        loadComponent: () => import('./features/Institute/pages/grades/grades.component').then(m => m.GradesComponent),
      }
    ]
  },
  {
    path: 'zetCollege',
    loadComponent: () => import('./features/ZetCollege/pages/zet-college/college.component').then(m => m.CollegeComponent),
    children: [
      {
        path: '',
        pathMatch: "full",
        redirectTo: "students"
      },
      {
        path: 'students',
        loadComponent: () => import('./features/ZetCollege/pages/students/students.component').then(m => m.StudentsComponent),
      },
      {
        path: 'courses',
        loadComponent: () => import('./features/ZetCollege/pages/courses/courses.component').then(m => m.CoursesComponent),
      },
      {
        path: 'grades',
        loadComponent: () => import('./features/ZetCollege/pages/grades/grades.component').then(m => m.GradesComponent),
      }
    ]
  }
]
