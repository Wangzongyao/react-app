import React, { memo, useEffect } from 'react'
import { Button } from 'antd'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import styles from './index.less'

const Home = memo((props) => {
    const { homeList, featchHomeList } = props

    useEffect(featchHomeList, [])

    return (
        <div className={styles['home-wrap']}>
            { homeList }
            <NavLink to="/login" exact>
                <Button> to login</Button>
            </NavLink>
        </div>
    )
})

Home.propTypes = {
    homeList: PropTypes.arrayOf(PropTypes.number),
    featchHomeList: PropTypes.func,
}
Home.defaultProps = {
    homeList: [],
    featchHomeList: noop,
}

export default Home
