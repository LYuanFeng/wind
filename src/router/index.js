import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/management/Dialog/Login'
import MainLayout from '@/components/management/Layouts/MainLayout'

import P01 from '@/pages/management/p01/p01Client'
import P02 from '@/pages/management/p02/p02Client'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/wind/management/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/wind/management',
      name: 'MainLayout',
      // component: HelloWorld
      component: MainLayout,
      children: [
        { path: "p01", name: "p01", component: P01 },//path 路由路徑，name二級路由使用的組件名， component导进来组件的名字
        { path: "p02", name: "p02", component: P02 },
      ]
    }
  ]
})
