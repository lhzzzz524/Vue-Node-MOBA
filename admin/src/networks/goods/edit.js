import { request } from '../request'

export const getInputData = (model) => {
  return request({
    url: '/items',
    method: 'post',
    data: model
  })
}

export const getSetInputData = (id) => {
  return request({
    url: `/items/${id}`,
    method: 'get'
  })
}

export const getUpdata = (id, model) => {
  return request({
    url: `/items/${id}`,
    method: 'put',
    data: model
  })
}