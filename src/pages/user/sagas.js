import { message } from 'antd'
import { put, call, takeEvery } from 'redux-saga/effects'

import fetchJson from '@commons/fetch'
import URLS from '@commons/URLS'
import CONSTANTS from './constants'

export function* featchHomeList(action) {
    const { params } = action
    try {
        const { data } = yield call(fetchJson, URLS.GET_USER_DATA, params)
        yield put({ type: CONSTANTS.GET_USER_DATA_SUCCESSED, payload: data })
    } catch (error) {
        yield put({ type: CONSTANTS.GET_USER_DATA_FAILED })
        message.error(error)
    }
}

export function* featchHomeListSaga() {
    yield takeEvery(CONSTANTS.GET_USER_DATA_REQUESTED, featchHomeList)
}

export default {
    featchHomeListSaga,
}
