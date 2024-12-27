import { Routes } from '@angular/router'

import {HomeComponent} from './features/Home/pages/home.component';
import {GerardoInstituteComponent} from './features/Institute/pages/gerardoInstitute.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'GerardoInstitute',
    component: GerardoInstituteComponent
  }
   //{
    //path: 'instructions',
    //loadComponent: () => import('./features/pages/instructions/instructions.component')
  //},
]
