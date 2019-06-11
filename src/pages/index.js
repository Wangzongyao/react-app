import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './home/index';
import Login from './login/index';

class Pages extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Redirect exact={true} from="/" to="/home" />
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Pages;
