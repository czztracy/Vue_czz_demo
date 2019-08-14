import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 公用路由
export let constantRouterMap = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index')
  }
]

// 动态路由
export let asyncRouterMap = []

export default new Router({
  mode: 'hash',
  routes: constantRouterMap
})
