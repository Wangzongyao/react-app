import { compose } from 'redux'
import { connect } from 'react-redux'

import User from './index'
import CONSTANTS from './constants'

const mapStateToProps = state => ({ ...state.user })

/**
 * @param {Function} dispatch
 * @param {Object} ownProps
 */
const mapDispatchToProps = dispatch => ({
    featchUserData: (...params) => dispatch({ type: CONSTANTS.GET_USER_DATA_REQUESTED, params }),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
export default compose(withConnect)(User)
