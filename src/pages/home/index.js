import React, { memo, useEffect } from 'react'
import { Button } from 'antd'
import { NavLink } from 'react-router-dom'

import styles from './index.less'

const Home = memo((props) => {
    const { homeList, featchHomeList } = props

    useEffect(() => {
        // const { featchHomeList } = this.props
        // featchHomeList([1])
        // console.log(this.props)
        // const data = fetchJson('http://localhost:8080/user/login.json')
        // data.then((response) => {
        //     // 返回 object 类型
        //     this.setState({ name: response.data.userName })
        // })
        featchHomeList()
    }, [])

    return (
        <div className={styles['home-wrap']}>
            {homeList}
            <NavLink to="/login" exact>
                <Button> to login</Button>
            </NavLink>
        </div>
    )
})

export default Home
