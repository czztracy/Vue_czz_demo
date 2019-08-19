import router from '@/router'
import store from '@/store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/cookie'
import NProgress from 'nprogress' // 进度条使用
import 'nprogress/nprogress.css'

let whiteList = ['/login']
router.beforeEach((to, from, next) => {
  NProgress.start()
  let hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      // 判断当前用户是否已拉取完user_info信息
      if (store.getters.roles.length === 0) {
        store.dispatch('GetUserInfo').then(res => {
          const roles = res.roles
          store.dispatch('GenerateRoutes', { roles }).then(() => {
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next({ ...to, replace: true }) // 确保addRoutes已完成
          })
        }).catch(err => {
          Message.error(err || 'Verification failed, please login again')
          next({ path: '/' })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
