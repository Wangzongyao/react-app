import React, { memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import styles from './index.less'

const User = memo((props) => {
    const { userData: { userId, userName, userAvatar }, featchUserData } = props

    useEffect(() => { featchUserData() }, [])

    return (
        <div className={styles['home-wrap']}>
            userId:
            {' '}
            { userId }
            userName:
            {' '}
            { userName }
            userAvatar:
            {' '}
            <img src={userAvatar} alt="userAvatar" />
        </div>
    )
})

User.propTypes = {
    userData: PropTypes.objectOf({
        userId: PropTypes.string,
        userName: PropTypes.string,
        userAvatar: PropTypes.string,
    }),
    featchUserData: PropTypes.func,
}
User.defaultProps = {
    userData: {},
    featchUserData: noop,
}

export default User
