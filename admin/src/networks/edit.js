import { request } from './request'

export const getInputData = (model) => {
  return request({
    url: '/categories',
    method: 'post',
    data: model
  })
}

export const getSetInputData = (id) => {
  return request({
    url: `/categories/${id}`,
    method: 'get'
  })
}

export const getUpdata = (id, model) => {
  return request({
    url: `/categories/${id}`,
    method: 'put',
    data: model
  })
}