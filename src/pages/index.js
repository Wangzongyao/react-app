import React , { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const Lazy = React.lazy(() => import('./lazy/index'));
const Home = React.lazy(() => import('./home/index'));
const Login = React.lazy(() => import('./login/index'));

class Pages extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Redirect exact={true} from="/" to="/home" />
                        <Route path="/home" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/lazy" component={Lazy} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        );
    }
}

export default Pages;
