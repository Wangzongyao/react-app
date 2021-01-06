import React from 'react'
import ReactDOM from 'react-dom'
import {
    createStore, combineReducers, applyMiddleware, compose,
} from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import ErrorBoundary from '@commons/components/errorBoundary'
import { initFetch } from '@commons/utils/fetch'
import { rmLocal } from '@commons/utils/localStorage'
import { TOKEN_KEY } from '@commons/constants'

import reducers from './reducers'
import sagas from './sagas'
import Pages from './pages/index'

// 初始化HTTP请求返回格式
initFetch({
    responseConstructor: { success: 'flag' },
    interceptor: (response) => {
        if (response.status === 401) {
            rmLocal(TOKEN_KEY)
            const redirect = encodeURIComponent(window.location.href)
            window.location.replace(`/login?redirect=${redirect}`)
            throw new Error('暂未授权，请重新登录！')
        }
    },
})

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
