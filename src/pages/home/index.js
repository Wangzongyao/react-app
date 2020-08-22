import React from 'react'
import { Button } from 'antd'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import fetchJson from 'LocalCommons/fetch/index'
import styles from './index.less'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'lrq',
            ages: 10,
        }
    }

    componentDidMount() {
        const data = fetchJson('http://localhost:8080/user/login.json')
        data.then((response) => {
            // 返回 object 类型
            this.setState({ name: response.data.userName })
        })
    }

    render() {
        const { name, ages } = this.state
        return (
            <div className={styles['home-wrap']}>
              姓名：
            {name}
；年龄：
                {ages}
                <NavLink to="/login" exact>
                    <Button> to login</Button>
              </NavLink>
          </div>
        )
    }
}

export default connect(state => state)(Home)
