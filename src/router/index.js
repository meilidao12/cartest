import Vue from 'vue'


import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/Main',
      name:'Main',
      component: Main
    }
  ]
})
