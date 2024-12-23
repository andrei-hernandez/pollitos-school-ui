import {Routes} from '@angular/router'
import InstructionsComponent from './features/pages/instructions/instructions.component'
import {HomeComponent} from './features/home/pages/home/home.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'instructions',
    component: InstructionsComponent
  }
]
