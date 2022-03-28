import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';

import App from './app';
import './style.css';
import {allReducers} from './reducers/allReducers' ;

const store = createStore(allReducers,compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
,document.getElementById('root'))