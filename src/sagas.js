import { fork } from 'redux-saga/effects'
// https://webpack.js.org/guides/dependency-management/#requirecontext
const context = require.context('./pages/', true, /\.js$/)
// https://webpack.js.org/guides/dependency-management/#context-module-api
const keys = context.keys().filter(item => item.match(/\/sagas.js$/))
const sagas = keys.reduce((memo, key) => [...memo, ...Object.values(context(key).default)], [])

function* rootSaga() {
    for (const key in sagas) {
        yield fork(sagas[key])
    }
}

export default rootSaga
