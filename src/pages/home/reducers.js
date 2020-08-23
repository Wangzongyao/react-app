import { handleActions } from 'redux-actions'

import CONSTANTS from './constants'

const initState = {
    homeList: [],
}

export default handleActions({
    [CONSTANTS.GET_HOME_DATA_SUCCESSED]: (perState, { payload }) => ({ ...perState, homeList: payload }),
    [CONSTANTS.GET_HOME_DATA_FAILED]: perState => perState,

}, initState)
