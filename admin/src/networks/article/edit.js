import { request } from '../request'

export const getInputData = (model) => {
  return request({
    url: '/article',
    method: 'post',
    data: model
  })
}

export const getSetInputData = (id) => {
  return request({
    url: `/article/${id}`,
    method: 'get'
  })
}

export const getUpdata = (id, model) => {
  return request({
    url: `/article/${id}`,
    method: 'put',
    data: model
  })
}