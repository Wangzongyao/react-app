import React, { memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Button } from 'antd'
import { noop } from 'lodash'

import styles from './index.less'

const Login = memo((props) => {
    const { checkToken, postLoginData } = props

    useEffect(() => { checkToken() }, [])

    const onFinish = (values) => {
        postLoginData(values)
    }

    return (
        <div className={styles['login-wrap']}>
            <Form name="login" onFinish={onFinish}>
                <Form.Item name="name" label="账号">
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="密码">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
})

Login.propTypes = {
    checkToken: PropTypes.func,
    postLoginData: PropTypes.func,
}
Login.defaultProps = {
    checkToken: noop,
    postLoginData: noop,
}

export default Login
