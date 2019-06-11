import React from 'react';
import { Button } from 'antd'
import { NavLink } from 'react-router-dom';

import fetchJson from '../../commons/fetch/index.js'
import styles from './index.less'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
        }
    }

    componentDidMount() {
        const data = fetchJson('http://localhost:8080/user/login.json')
        data.then((response) => {
            //返回 object 类型
            this.setState({ name: response.data.userName })
        });
    }

    render() {
        return (
            <div className={styles['home-wrap']}>
                <NavLink to="/login" exact={true}>
                    <Button onClick={this.gotoLogin}>Hello {this.state.name}</Button>
                </NavLink>
            </div>
        );
    }
}

export default Home;
