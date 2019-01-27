import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactExamplesComponent } from './react-examples.component';
import { ReactWorldgdpComponent } from './react-worldgdp.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ReactExamplesComponent
  },
  {
    path: 'gdp',
    component: ReactWorldgdpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactDemoRoutingModule {}
