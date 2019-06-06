import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Detail from '@/components/Details/Detail'
import { resolve } from 'path';


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
      component: Main,
      children:[
        {
          path:'/Detail',
          name:'Detail',
          component:Detail
        },
        {
          path:"/Set",
          name:'Set',
          component: resolve => require(['@/components/Details/Set.vue'],resolve)
        }
      ]
    }
  ]
})
