import { Layout, Menu } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import React, { memo, Suspense, lazy } from 'react'
import {
    BrowserRouter, Switch, Route, Redirect, NavLink,
} from 'react-router-dom'

import Loading from '@commons/components/loading'
import styles from './index.less'

const { Header, Sider, Content } = Layout

const NotFound = lazy(() => import('@commons/components/notFound'))
const Login = lazy(() => import('./login/connect'))
const Home = lazy(() => import('./home/connect'))
const User = lazy(() => import('./user/connect'))

const MENU_MAP = [
    {
        comp: Home,
        path: '/home',
        menu: {
            icon: <HomeOutlined />,
            name: '首页',
        },
    },
    {
        comp: User,
        path: '/user',
        menu: null,
    },
]

// 默认菜单展开项
const MENU_SELECT_KEYS = ['0']

// 菜单列表
const MenuComp = () => (
    <Menu defaultSelectedKeys={MENU_SELECT_KEYS} className={styles['menu-wrap']}>
        {
            MENU_MAP.filter(item => item.menu).map(item => (
                <Menu.Item key={item.path} icon={item.menu.icon}>
                    <NavLink to={item.path} exact>
                        {item.menu.name}
                    </NavLink>
                </Menu.Item>
            ))
        }
    </Menu>
)

// 页面主体
const ContentRouterComp = () => (
    <Layout>
        <Sider>
            <MenuComp />
        </Sider>
        <Layout>
            <Header className={styles['header-wrap']} />
            <Content className={styles['content-wrap']}>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Redirect exact from="/" to="/home" />
                        <Route path="/home" component={Home} />
                        <Route path="/user" component={User} />
                        <Route component={NotFound} />
                    </Switch>
                </Suspense>
            </Content>
        </Layout>
    </Layout>
)

const Pages = memo(
    () => (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={ContentRouterComp} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    ),
)

export default Pages
