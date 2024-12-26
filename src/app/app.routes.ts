import {Routes} from '@angular/router'
import InstructionsComponent from './features/pages/instructions/instructions.component'
import {HomeComponent} from './features/home/pages/home/home.component'
import {ZetcollegeComponent} from './features/zetcollege/zetcollege.component'
import {GerardoinstituteComponent} from './features/gerardoinstitute/gerardoinstitute.component'

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
    path: 'zetcollege',
    component: ZetcollegeComponent
  },
  {
    path: 'gerardoinstitute',
    component: GerardoinstituteComponent
  }

]
