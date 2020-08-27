import React, { memo, Suspense, lazy } from 'react'
import {
    BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom'

import Loading from '@commons/components/loading'

const NotFound = lazy(() => import('@commons/components/notFound'))
const Home = lazy(() => import('./home/connect'))
const User = lazy(() => import('./user/connect'))

const Pages = memo(
    () => (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route path="/home" component={Home} />
                    <Route path="/user" component={User} />
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    ),
)

export default Pages
