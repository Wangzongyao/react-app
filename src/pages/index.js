import { Layout, Menu } from 'antd'
import { UserOutlined, HomeOutlined } from '@ant-design/icons'
import React, { memo, Suspense, lazy } from 'react'
import {
    BrowserRouter, Switch, Route, Redirect, NavLink,
} from 'react-router-dom'

import Loading from '@commons/components/loading'
import styles from './index.less'

const { Header, Sider, Content } = Layout

const NotFound = lazy(() => import('@commons/components/notFound'))
const Home = lazy(() => import('./home/connect'))
const User = lazy(() => import('./user/connect'))

// 默认菜单展开项
const MENU_SELECT_KEYS = ['0']

// 菜单列表
const MenuComp = () => (
    <Menu defaultSelectedKeys={MENU_SELECT_KEYS} className={styles['menu-wrap']}>
        <Menu.Item key="0" icon={<HomeOutlined />}>
            <NavLink to="/home" exact>系统主页</NavLink>
        </Menu.Item>
        <Menu.Item key="1" icon={<UserOutlined />}>
            <NavLink to="/user" exact>个人中心</NavLink>
        </Menu.Item>
    </Menu>
)
// 页面主体
const ContentRouterComp = () => (
    <Suspense fallback={<Loading />}>
        <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/user" component={User} />
            <Route component={NotFound} />
        </Switch>
    </Suspense>
)

const Pages = memo(
    () => (
        <BrowserRouter>
            <Layout>
                <Sider><MenuComp /></Sider>
                <Layout>
                    <Header className={styles['header-wrap']} />
                    <Content className={styles['content-wrap']}>
                        <ContentRouterComp />
                    </Content>
                </Layout>
            </Layout>
        </BrowserRouter>
    ),
)

export default Pages
