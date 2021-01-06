import { message } from 'antd'
import { put, call, takeEvery } from 'redux-saga/effects'

import { fetchJson } from '@commons/utils/fetch/index'
import URLS from '@commons/urls'
import CONSTANTS from './constants'

export function* featchHomeList(action) {
    const { params } = action
    try {
        const data = yield call(fetchJson, URLS.GET_HOME_DATA, params)
        yield put({ type: CONSTANTS.GET_HOME_DATA_SUCCESSED, payload: data })
    } catch (error) {
        message.error(error.message)
        yield put({ type: CONSTANTS.GET_HOME_DATA_FAILED })
    }
}

export function* featchHomeListSaga() {
    yield takeEvery(CONSTANTS.GET_HOME_DATA_REQUESTED, featchHomeList)
}

export default {
    featchHomeListSaga,
}
