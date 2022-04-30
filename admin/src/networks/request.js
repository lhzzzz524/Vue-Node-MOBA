import axios from 'axios'

export const request = (config) => {
  const instance = axios.create({
    baseURL: 'http://localhost:3000/admin/api'
  })
  return instance(config)
}