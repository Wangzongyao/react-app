import React from 'react'
import ReactDOM from 'react-dom'
import {
    createStore, combineReducers, applyMiddleware, compose,
} from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import ErrorBoundary from '@commons/components/errorBoundary'
import reducers from './reducers'
import sagas from './sagas'
import Pages from './pages/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    combineReducers(reducers),
    composeEnhancers(applyMiddleware(sagaMiddleware)),
)
sagaMiddleware.run(sagas)

ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <Pages />
        </Provider>
    </ErrorBoundary>,
    document.getElementById('app'),
)
