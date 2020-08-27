import { handleActions } from 'redux-actions'

import CONSTANTS from './constants'

const initState = {
    userData: {
        userId: '',
        userName: '',
        userAvatar: '',
    },
}

export default handleActions({
    [CONSTANTS.GET_USER_DATA_SUCCESSED]: (perState, { payload }) => ({ ...perState, userData: payload }),
    [CONSTANTS.GET_USER_DATA_FAILED]: perState => perState,

}, initState)
