import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers';
import WebpackDemo from './pages/index';

const store = createStore(combineReducers(reducers));

ReactDOM.render(
    // 需要让容器组件WebpackDemo拿到state对象
    <Provider store={store}>
        <WebpackDemo />
    </Provider>
    , 
    document.getElementById('app')
);
