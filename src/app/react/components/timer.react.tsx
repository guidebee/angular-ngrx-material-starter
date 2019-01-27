import * as React from 'react';

import { select, Store } from '@ngrx/store';
import { AppState, selectIsAuthenticated, ActionAuthLogin, ActionAuthLogout } from '@app/core';
import { Observable } from 'rxjs';
import { Button } from '@material-ui/core';

interface Props {
  timerID: any;
  toWhat: string;
}

interface State {
  date: Date;
}

export class TimerReactComponent extends React.Component<Props, State> {
  timerID: any;
  isAuthenticated$: Observable<boolean>;
  store: Store<AppState>;

  loggedin = false;

  constructor(props: any) {
    super(props);
    this.store = props.store;
    this.state = { date: new Date() };
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }

  tick() {
    this.setState({
      date: new Date()
    });

  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.isAuthenticated$.subscribe(e => this.loggedin = e);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  loginUser = () => {
    if (!this.loggedin) {
      this.store.dispatch(new ActionAuthLogin());
    } else {
      this.store.dispatch(new ActionAuthLogout());
    }
  }
  render() {
    return <div>
      <div>Hello {this.props.toWhat} {this.state.date.toLocaleTimeString()}</div>
      <div><Button variant='contained' color='primary' onClick={this.loginUser}>
        {this.loggedin && 'Logout'}
        {!this.loggedin && 'Login'}
      </Button>
        <div>
          {this.loggedin && 'You are logged in'}
          {!this.loggedin && 'You are not logged in yet'}
        </div></div>
    </div>;
  }
}
