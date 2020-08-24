#### REACT-APP

##### 一、概述
react-app使用技术栈为react、redux、saga。UI组件库使用🐜的ant design。采用的webpack打包。

##### 二、结构概述

```
-mock：静态数据mock文件
-src：app资源文件
  -commons：公用组件、方法和变量等文件
  -page：页面路由页
    -routerName
    -connect：组件关联store
    -constants：路由页常量或配置文件
    -index：路由页入口组件
    -reducers：路由页reducer
    -sagas：路由页saga
```

##### 三、启动与开发
`npm run start`启动本地服务，项目已部署热更新。
`npm run analyzer`启动本地分析打包资源，以供优化。