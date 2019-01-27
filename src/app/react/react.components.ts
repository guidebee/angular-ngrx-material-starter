import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef
} from '@angular/core';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { TimerReactComponent } from './components/timer.react';
import WorldGdp from './components/world-gdp.react';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core';

class ReactWrapper implements AfterViewInit {
  constructor(
    private elRef: ElementRef,
    private comp: any,
    private props: any
  ) {}

  ngAfterViewInit(): void {
    ReactDOM.render(
      React.createElement(this.comp, ...this.props, null),
      this.elRef.nativeElement
    );
  }
}

@Component({
  selector: 'anms-world-gdp',
  template: '<div></div>',

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorldGdpComponent extends ReactWrapper {
  constructor(elRef: ElementRef) {
    super(elRef, WorldGdp, {});
  }
}

@Component({
  selector: 'anms-timer-message',
  template: '<div></div>',

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent extends ReactWrapper {
  constructor(elRef: ElementRef, store: Store<AppState>) {
    super(elRef, TimerReactComponent, { toWhat: 'react', store: store });
  }
}
