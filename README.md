# 手动实现手动实现 redux react-redux

## redux

```js
export function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }

  let currentState = undefined;
  let currentListeners = [];
  currentState = reducer(currentState, { type: "INIT" });

  function getState() {
    return currentState;
  }

  function subscribe(fun) {
    currentListeners.push(fun);
  }

  function dispatch(action) {
    currentState = reducer(currentState, action);
    currentListeners.map((item) => item());
  }
  return {
    getState,
    subscribe,
    dispatch,
  };
}
export function hoc(createStore) {
  return function (reducer) {
    let result = createStore(reducer);
    let dispatch = function (action) {
      if (typeof action === "function") {
        action(result.dispatch);
      } else {
        result.dispatch(action);
      }
    };
    return { ...result, dispatch };
  };
}

export function compost(...funs) {
  if (funs.length === 0) {
    return (arg) => arg;
  }
  if (funs.length === 1) {
    return funs[0];
  }
  return funs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}

export function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === "object") {
    function bindActionCreator(actionCreator, dispatch) {
      return (...args) => dispatch(actionCreator(...args));
    }
    const keys = Object.keys(actionCreators);
    const boundActionCreators = {};
    keys.forEach((key) => {
      boundActionCreators[key] = bindActionCreator(
        actionCreators[key],
        dispatch
      );
    });
    return boundActionCreators;
  }
  throw new Error("第一个参数必须为 object");
}
```
### react-redux

```js
import React, { Component } from 'react';
import { bindActionCreators } from './redux'

const MyContext = React.createContext(null);
/**
 * @Description Provider 传store
 * @Author Aaron
 * @Date 2021/09/11 20:29:21
 * @param { Boolean }
 * @return { Boolean }
 */
export class Provider extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <MyContext.Provider value={this.props.store}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

/**
 * @Description connect
 * @Author Aaron
 * @Date 2021/09/11 20:28:53
 * @param { mapStateToProps ,mapDispatchToProps}
 * @return { WrapperComponent }
 */
export const connect = (mapStateToProps, mapDispatchToProps) => (WrapperComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                props: {}
            }
        }
        static contextType = MyContext;
        componentDidMount() {
            console.log(this.context);
            const { subscribe } = this.context
            this.update()
            subscribe(() => {
                this.update()
            })

        }
        update() {
            const { getState, dispatch } = this.context
            let stateToProps = mapStateToProps(getState())
            let dispatchToProps = null;

            switch (typeof mapDispatchToProps) {
                case 'function':
                    dispatchToProps = mapDispatchToProps(dispatch);
                    break;
                case 'object':
                    dispatchToProps = bindActionCreators(mapDispatchToProps, dispatch);
                    break;
                default:
                    dispatchToProps = { dispatch }
                    break;
            }

            this.setState({
                props: { ...stateToProps, ...dispatchToProps }
            })
            
        }
        render() {
            return (
                // <MyContext.Consumer>
                //     {theme => <WrapperComponent {...props} theme={theme} />}
                // </MyContext.Consumer>
                <WrapperComponent {...this.state.props} />
            );
        }
    }
}

```
