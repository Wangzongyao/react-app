import { put, call, takeEvery } from 'redux-saga/effects'

import fetchJson from 'LocalCommons/fetch'
import URLS from 'LocalCommons/URLS'
import CONSTANTS from './constants'

export function* featchHomeList(action) {
    const { params } = action
    const payload = yield call(fetchJson, URLS.GET_HOME_DATA, params)
    console.log(payload)
    yield put({ type: CONSTANTS.GET_HOME_DATA_SUCCESSED, payload })
}

export function* featchHomeListSaga() {
    yield takeEvery(CONSTANTS.GET_HOME_DATA_REQUESTED, featchHomeList)
}

export default {
    featchHomeListSaga,
}
