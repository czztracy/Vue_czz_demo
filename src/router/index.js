import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'

Vue.use(Router)

// 公用路由
export let constantRouterMap = [
  {
    path: '/',
    component: Index,
    name: 'dashboard',
    redirect: '/dashboard/index',
    meta: { title: '主页', icon: 'fa fa-dashboard' },
    children: [
      {
        path: '/dashboard/index',
        name: 'index',
        component: () => import('@/views/dashboard/index'),
        meta: {
          icon: 'fa fa-automobile ',
          title: 'Dashboard',
          noChild: true
        }
      },
      {
        path: '/dashboard/index1',
        name: 'index1',
        component: () => import('@/views/dashboard/index1'),
        meta: {
          icon: 'fa fa-balance-scale',
          title: '主页1',
          noChild: true
        }
      }
    ]
  },
  {
    path: '/module',
    component: Index,
    name: 'module',
    meta: { icon: 'fa fa-database', title: '组件' },
    children: [
      {
        path: '/module',
        name: 'Module',
        component: () => import('@/views/module/index'),
        meta: {
          icon: 'fa fa-address-book-o',
          title: '组件1',
          noChild: true
        }
      },
      {
        path: '/module/index1',
        name: 'MOD',
        component: () => import('@/views/module/index1'),
        meta: {
          icon: 'fa fa-address-card',
          title: '组件2',
          noChild: true
        }
      }
    ]
  },
  {
    path: '/optimize',
    component: Index,
    name: 'optimize',
    children: [
      {
        path: '/optimize',
        name: 'Optimize',
        component: () => import('@/views/optimize/index'),
        meta: {
          icon: 'fa fa-rocket',
          title: '优化',
          noChild: true
        }
      }
    ]
  },
  {
    path: '/language',
    component: Index,
    name: 'language',
    children: [
      {
        path: '/language',
        name: 'Language',
        component: () => import('@/views/language/index'),
        meta: {
          icon: 'fa fa-language',
          title: '多语言',
          noChild: true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    hidden: true
  }
]

// 动态路由
export let asyncRouterMap = []

export default new Router({
  mode: 'hash',
  routes: constantRouterMap
})
