import React, { Component } from 'react';
// import {Provider} from 'react-redux'
import {Provider} from '../reactDedux'
import About from '../views/about';
// import Home from '../views/home';

import store from '../store';

class APP extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
        <Provider store={store}>
          <About ></About>
          {/* <Home ></Home> */}
        </Provider>
     );
  }
}
 
export default APP;
