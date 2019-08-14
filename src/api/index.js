import axios from 'axios'
import router from '@/router'
import { Message } from 'element-ui'
import { removeToken } from '@/utils/cookie'

const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 60000
})

service.interceptors.request.use(
  config => {
    // const token = getToken()
    // config.headers['Authorization'] = token
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const responseCode = response.status
    if (responseCode === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    // 断网 或者 请求超时 状态
    if (!error.response) {
      // 请求超时
      if (error.message.includes('timeout')) {
        Message.error('请求超时, 请检查网络是否正常')
      } else {
        // 可以展示断网组件
        Message.error('请求失败, 请检查网络是否已连接')
      }
      return
    }
    const responseCode = error.response.status
    switch (responseCode) {
      // 401 未登录
      case 401:
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
        break
      // 403 token过期
      case 403:
        Message({
          type: 'error',
          message: '登录信息过期，请重新登录'
        })
        // 清除token
        removeToken()
        // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
        setTimeout(() => {
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
        }, 1000)
        break
      // 404 请求不存在
      case 404:
        Message({
          type: 'error',
          message: '网络请求不存在'
        })
        break
      // 其他错误,直接抛出错误提示
      default:
        Message({
          type: 'error',
          message: error.response.data.message
        })
    }
    return Promise.reject(error)
  }
)

export default service
