import React, { memo, Suspense, lazy } from 'react'
import {
    BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom'

const Home = lazy(() => import('./home/connect'))
const Login = lazy(() => import('./login/index'))

const Pages = memo(
    () => (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    ),
)

export default Pages
