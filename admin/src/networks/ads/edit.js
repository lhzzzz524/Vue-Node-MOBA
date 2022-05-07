import { request } from '../request'

export const getInputData = (model) => {
  return request({
    url: '/advertising',
    method: 'post',
    data: model
  })
}

export const getSetInputData = (id) => {
  return request({
    url: `/advertising/${id}`,
    method: 'get'
  })
}

export const getUpdata = (id, model) => {
  return request({
    url: `/advertising/${id}`,
    method: 'put',
    data: model
  })
}