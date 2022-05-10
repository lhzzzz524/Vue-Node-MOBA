import axios from 'axios'
import Vue from "vue"
import router from '../router'

export const request = (config) => {
  const instance = axios.create({
    baseURL: 'http://localhost:3000/admin/api/rest'
  })
  instance.interceptors.request.use((req) => {
    if (localStorage.token) {
      req.headers.Authorization = 'Bearer ' + localStorage.token
    }
    return req
  })
  instance.interceptors.response.use(res => {
    return res
  }, err => {
    if (err.response.data.message) {
      Vue.prototype.$message({
        type: 'error',
        message: err.response.data.message
      })
    }
    // 约定状态码401重定向/login
    if (err.response.status === 401) {
      setTimeout(() => {
        router.push('/login')
      }, 1500);
    }
  })
  return instance(config)
}

export const request1 = (config) => {
  const instance = axios.create({
    baseURL: 'http://localhost:3000/admin/api'
  })
  instance.interceptors.response.use(res => {
    return res
  }, err => {
    if (err.response.data.message) {
      Vue.prototype.$message({
        type: 'error',
        message: err.response.data.message
      })
      return Promise.reject(err)
    }
  })
  return instance(config)
}