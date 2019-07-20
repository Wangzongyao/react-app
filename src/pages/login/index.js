import React from 'react';
import { Button } from 'antd'

import styles from './index.less'

class Login extends React.PureComponent {
    constructor() {
        super();
        this.state = {}
    }
    renderList1 = (params) => {
        console.log(params)
    }
    renderList2(params) {
        console.log(params)
    }
    renderList3 = (params) => () => {
        console.log(params)
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     if(nextProps.name === this.props.name) return false
    //     return true
    //     // return false
    // }
    render() {
        const { name } = this.props
        // console.log((()=>this.renderList1(0)))
        // console.log(this.renderList2.bind(this, 1))
        // console.log(this.renderList3(2))
        return (
            <div className={styles['login_wrap']}>
                {name}
                <Button onClick={()=>this.renderList1(0)}>()=></Button>
                <Button onClick={this.renderList2.bind(this, 1)}>bind</Button>
                <Button onClick={this.renderList3(2)}>闭包</Button>
            </div>
        );
    }
}

export default Login;