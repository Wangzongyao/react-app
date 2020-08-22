import {
    GET_HOME_DATA_SUCCESSED,
    GET_HOME_DATA_FAILED,
} from './constants'

const defaultState = {
    id: 0,
}
const todos = (state = defaultState, action) => {
    switch (action.type) {
        case GET_HOME_DATA_SUCCESSED:
            return {...state, id: 1}
        case GET_HOME_DATA_FAILED:
            return state
        default:
            return state
    }
}

export default todos