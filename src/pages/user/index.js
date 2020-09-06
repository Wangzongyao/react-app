import { Card } from 'antd'
import React, { memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import UserHerderImage from '@resource/user/user-header.jpeg'
import styles from './index.less'

const { Meta } = Card

const User = memo((props) => {
    const { userData: { userId, userName, userAvatar }, featchUserData } = props

    useEffect(() => { featchUserData() }, [])

    return (
        <div className={styles['user-wrap']}>
            <Card
                className={styles['user-card']}
                hoverable
                cover={<img src={userAvatar || UserHerderImage} alt="userAvatar" />}
            >
                <Meta title={`userId: ${userId}`} description={`userName: ${userName}`} />
            </Card>
        </div>
    )
})

User.propTypes = {
    userData: PropTypes.objectOf(PropTypes.string),
    featchUserData: PropTypes.func,
}
User.defaultProps = {
    userData: {},
    featchUserData: noop,
}

export default User
