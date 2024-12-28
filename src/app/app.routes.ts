import {Routes} from '@angular/router'
import {InstructionsComponent} from './features/instructions/instructions.component'
import {HomeComponent} from './features/home/home.component'
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'instructions',
    component: InstructionsComponent
  },
  {
    path: 'gerardoinstitute',
    loadComponent: () => import('./features/gerardoinstitute/main/gerardoinstitute.component').then(m => m.GerardoinstituteComponent)
  },
  {
    path: 'zetcollege',
    loadComponent: () => import('./features/zetcollege/main/zetcollege.component').then(m => m.ZetcollegeComponent)
  },


]
