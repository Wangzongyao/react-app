import React from 'react';
import { Button } from 'antd'

import styles from './index.less'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className={styles['home-wrap']}>
                <Button>Hello World</Button>
        </div>
        );
    }
}

export default Home;
