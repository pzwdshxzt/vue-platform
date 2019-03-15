/**
 * axios 配置
 */
import axios from 'axios'
import Utils from '@/js/utils/crypto.js'
import { Message } from 'element-ui'
import store from '../../store'
// axios.defaults.baseURL = 'http://111.230.183.115:9090'
axios.defaults.baseURL = 'http://localhost:9090'
// axios.defaults.withCredentials = true

/**
 * 添加请求拦截器
 */
axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem('token')
    // console.log(token)
    if (token !== undefined) {
      config.headers.Authorization = Utils.encrypt(token)
    }
    if (config.data !== undefined) {
      config.data.date = formatDate()
      config.data.time = formatTime()
      if (config.data.data !== undefined) {
        config.data.data = Utils.encrypt(JSON.stringify(config.data.data))
      }
    }
    return config
  },
  error => {
  // 对请求错误做些什么
    return Promise.reject(error)
  }
)
/**
 * 添加响应拦截器
 */
axios.interceptors.response.use(
  response => {
    if (response.data !== undefined && response.data !== '') {
      let data = Utils.decrypt(response.data.data)

        if (data.data !== undefined) {
            response.data = data
        } else {
            response.data = JSON.parse(data)
        }

      if (response.data.data !== undefined && response.data.data !== '') {
        response.data.data = JSON.parse(response.data.data)
      }
    }
    return response
  },
  error => {
    if (error.response.code === 999) {
      Message({
        type: 'warning',
        message: error.response.data.msg
      })
      store.dispatch('loginOut')
    }
    // return Promise.reject(error)
    // return error.response
    // return Promise.
  }
)

function formatDate () {
  let time = new Date()
  return `${time.getFullYear()}-${time.getMonth() + 1 >= 10 ? (time.getMonth() + 1) : '0' + (time.getMonth() + 1)}-${time.getDate() >= 10 ? time.getDate() : '0' + time.getDate()}`
}

function formatTime () {
  let time = new Date()
  return `${time.getHours() >= 10 ? time.getHours() : '0' + time.getHours()}:${time.getMinutes() >= 10 ? time.getMinutes() : '0' + time.getMinutes()}:${time.getSeconds() >= 10 ? time.getSeconds() : '0' + time.getSeconds()}`
}

export default axios
