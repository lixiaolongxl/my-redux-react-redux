export function createStore(reducer, enhancer) {
    if (enhancer) {
        return enhancer(createStore)(reducer)
    }

    let currentState = undefined;
    let currentListeners = []
    currentState = reducer(currentState, { type: 'INIT' });

    function getState() {
        return currentState
    }

    function subscribe(fun) {
        currentListeners.push(fun)
    }

    function dispatch(action) {
        currentState = reducer(currentState, action)
        currentListeners.map(item => item())
    }
    return {
        getState,
        subscribe,
        dispatch
    };
}
export function hoc(createStore) {
    return function (reducer) {
        let result = createStore(reducer);
        let dispatch = function (action) {

            if (typeof action === 'function') {
                action(result.dispatch);
            } else {
                result.dispatch(action);
            }
        }
        return { ...result, dispatch };
    }
}

export function compost(...funs) {
    if (funs.length === 0) {
        return arg => arg
    }
    if (funs.length === 1) {
        return funs[0]
    }
    return funs.reduce((a, b) => (...args) => a(b(...args)));
}

export function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === 'object') {

        function bindActionCreator(actionCreator, dispatch) {
            return (...args) => dispatch(actionCreator(...args))
        }
        const keys = Object.keys(actionCreators)
        const boundActionCreators = {}
        keys.forEach(key => {
            boundActionCreators[key] = bindActionCreator(actionCreators[key], dispatch)
        })
        return boundActionCreators;
    }
    throw new Error('第一个参数必须为 object')

}