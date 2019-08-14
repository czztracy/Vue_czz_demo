import router from '@/router'
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
      next()
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
