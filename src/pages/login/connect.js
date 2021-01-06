import { compose } from 'redux'
import { connect } from 'react-redux'

import Login from './index'
import CONSTANTS from './constants'

const mapStateToProps = state => ({ ...state.login })

/**
 * @param {Function} dispatch
 * @param {Object} ownProps
 */
const mapDispatchToProps = dispatch => ({
    // 参数的转化
    checkToken: () => dispatch({ type: CONSTANTS.CHECK_TOKEN_KEY }),
    postLoginData: (...params) => dispatch({ type: CONSTANTS.POST_LOGIN_DATA_REQUESTED, params }),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
export default compose(withConnect)(Login)
