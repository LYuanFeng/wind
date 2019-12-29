// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(ElementUI);

axios.defaults.withCredentials = true // 跨域保存session
axios.defaults.baseURL = "http://localhost:3600" // 默认基础路径配置，打包时删掉
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
