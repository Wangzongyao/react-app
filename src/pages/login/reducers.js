import { handleActions } from 'redux-actions'

import CONSTANTS from './constants'

const initState = {
    userData: {
        userName: '',
        userAvatar: '',
    },
}

export default handleActions({
    [CONSTANTS.POST_LOGIN_DATA_SUCCESSED]: (perState, { payload }) => ({ ...perState, userData: payload }),
    [CONSTANTS.POST_LOGIN_DATA_FAILED]: perState => perState,
}, initState)
