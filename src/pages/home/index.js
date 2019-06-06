import React from 'react';
import styles from './index.less'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className={styles['home-wrap']}>
                Hello World
        </div>
        );
    }
}

export default Home;
