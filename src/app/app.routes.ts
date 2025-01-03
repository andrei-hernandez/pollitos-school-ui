import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: ()=> import ('./features/Home/pages/home.component').then(m=> m.HomeComponent)
  },
  {
    path: 'Home',
    loadComponent: ()=> import ('./features/Home/pages/home.component').then(m=> m.HomeComponent)
  },
  {
    path: 'GerardoInstitute',
    loadComponent: ()=> import ('./features/Institute/pages/gerardoInstitute.component').then(m=> m.GerardoInstituteComponent),
   /* children:[
     {
      path: 'Courses',
      loadComponent: ()=> import ('./features/Institute/pages/courses/courses.component').then(m=> m.CoursesComponent),
    } 
    ]*/
  },
  {
    path: 'courses',
    loadComponent: ()=> import ('./features/Institute/pages/courses/courses.component').then(m=> m.CoursesComponent),
  },
   //{
    //path: 'instructions',
    //loadComponent: () => import('./features/pages/instructions/instructions.component')
  //},
]
