import React from 'react';
import { Button } from 'antd'

import styles from './index.less'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className={styles['login_wrap']}>
                <Button>LOGIN</Button>
            </div>
        );
    }
}

export default Login;