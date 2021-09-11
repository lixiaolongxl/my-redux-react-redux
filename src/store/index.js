import {createStore,hoc} from "../redux";
import reducer from './reducer'

const store = createStore(reducer,hoc);
export default store;

// import {createStore} from "redux";
// import reducer from './reducer'

// const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export default store;


