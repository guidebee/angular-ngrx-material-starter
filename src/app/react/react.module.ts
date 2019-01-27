import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorldGdpComponent, TimerComponent } from './react.components';

@NgModule({
  declarations: [TimerComponent, WorldGdpComponent],
  imports: [CommonModule],
  exports: [TimerComponent, WorldGdpComponent]
})
export class ReactModule {}
