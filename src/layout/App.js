import React, { Component } from 'react';
// import {Provider} from 'react-redux'
import { Provider } from '../reactDedux'
import About from '../views/about';
import { HashRouter, Link, Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Home from '../views/home';
import Error from '../views/error';

import store from '../store';

class APP extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path={'/about'} component={About} />
            <Route path={'/home'} component={Error} />
            <Redirect exact to="/about" from="/" />
            <Route component={Error} />
          </Switch>
        </HashRouter>

      </Provider>
    );
  }
}

export default APP;
