import React from 'react'
import { } from 'antd'
import { connect } from 'react-redux'

import styles from './index.less'

class Login extends React.PureComponent {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className={styles.login_wrap}>
                LOGIN
            </div>
        )
    }
}

export default connect(state => state)(Login)
