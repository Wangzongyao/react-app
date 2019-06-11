import React from 'react';
import { Button } from 'antd'

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
                <Button>Hello {this.state.name}</Button>
            </div>
        );
    }
}

export default Home;
