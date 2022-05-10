import { request } from '../request'

export const getInputData = (model) => {
  return request({
    url: '/adminUsers',
    method: 'post',
    data: model
  })
}

export const getSetInputData = (id) => {
  return request({
    url: `/adminUsers/${id}`,
    method: 'get'
  })
}

export const getUpdata = (id, model) => {
  return request({
    url: `/adminUsers/${id}`,
    method: 'put',
    data: model
  })
}