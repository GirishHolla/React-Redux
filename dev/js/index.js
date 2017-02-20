import React from 'react'; //1. For react class.
import ReactDOM from 'react-dom'; //2. React dom class.
import 'babel-polyfill'; //polyfill is backward compatible for JSX ES6.
import { createStore } from 'redux'
import {Provider} from 'react-redux'; // This is to access the store in containers.
import allReducers from './reducers/index';
import App from './components/app';


//STORE: Creating a store and passing 'All combinded Reducers'.
const store = createStore(allReducers);
 


ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider>,
    document.getElementById("root")
);



/* STORE ~~~~~
1 big Javascript object to store entire application's state.*/
