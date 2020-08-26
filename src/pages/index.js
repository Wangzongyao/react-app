import React, { memo, Suspense, lazy } from 'react'
import {
    BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom'

import Loading from '@commons/components/loading'

const Home = lazy(() => import('./home/connect'))
const Login = lazy(() => import('./login/index'))

const Pages = memo(
    () => (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
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
