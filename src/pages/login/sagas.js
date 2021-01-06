import { message } from 'antd'
import { put, call, takeEvery } from 'redux-saga/effects'

import { fetchJson } from '@commons/utils/fetch'
import { setLocal, getLocal } from '@commons/utils/localStorage'
import { TOKEN_KEY } from '@commons/constants'
import URLS from '@commons/urls'

import CONSTANTS from './constants'

export function* checkToken() {
    const token = yield getLocal(TOKEN_KEY)
    // token存在调至路由页面
    if (token) window.location.replace('/')
}
export function* checkTokenSaga() {
    yield takeEvery(CONSTANTS.CHECK_TOKEN_KEY, checkToken)
}

export function* postLoginData(action) {
    const { params } = action
    try {
        const { userToken, ...othersData } = yield call(fetchJson, URLS.POST_LOGIN_DATA, params)
        // 登陆成功设置token
        yield setLocal(TOKEN_KEY, userToken)

        yield put({ type: CONSTANTS.CHECK_TOKEN_KEY })
        yield put({ type: CONSTANTS.POST_LOGIN_DATA_SUCCESSED, payload: othersData })
    } catch (error) {
        message.error(error.message)
        yield put({ type: CONSTANTS.POST_LOGIN_DATA_FAILED })
    }
}
export function* postLoginDataSaga() {
    yield takeEvery(CONSTANTS.POST_LOGIN_DATA_REQUESTED, postLoginData)
}

export default {
    checkTokenSaga,
    postLoginDataSaga,
}
