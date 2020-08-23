import { handleActions } from 'redux-actions'

import { message } from 'antd'
import CONSTANTS from './constants'

const initState = {
    homeList: [],
}

export default handleActions({
    [CONSTANTS.GET_HOME_DATA_SUCCESSED]: (perState, { payload }) => {
        message.success('success!')
        return ({ ...perState, homeList: payload })
    },
    [CONSTANTS.GET_HOME_DATA_FAILED]: (perState) => {
        message.error('error!')
        return perState
    },

}, initState)
