import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MainLayout from '@/components/management/Layouts/MainLayout'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      // component: HelloWorld
      component: MainLayout
    }
  ]
})
