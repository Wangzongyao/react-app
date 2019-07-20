import React from 'react';
import { Button } from 'antd'

import styles from './index.less'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div className={styles['lazy_wrap']}>
                <Button>lazys</Button>
            </div>
        )
    }
}

export default Login;