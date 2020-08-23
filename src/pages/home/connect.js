import { compose } from 'redux'
import { connect } from 'react-redux'

import Home from './index'
import CONSTANTS from './constants'

const mapStateToProps = state => ({ ...state.home })

/**
 * @param {Function} dispatch
 * @param {Object} ownProps
 */
const mapDispatchToProps = dispatch => ({
    featchHomeList: (...params) => dispatch({ type: CONSTANTS.GET_HOME_DATA_REQUESTED, params }),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
export default compose(withConnect)(Home)
