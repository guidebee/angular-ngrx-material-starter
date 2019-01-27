import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactDemoRoutingModule } from './react-demo-routing.module';
import { ReactExamplesComponent } from './react-examples.component';
import { ReactModule } from '@app/react/react.module';
import { ReactWorldgdpComponent } from './react-worldgdp.component';

@NgModule({
  declarations: [ReactExamplesComponent, ReactWorldgdpComponent],
  imports: [CommonModule, ReactModule, ReactDemoRoutingModule]
})
export class ReactDemoModule {}
