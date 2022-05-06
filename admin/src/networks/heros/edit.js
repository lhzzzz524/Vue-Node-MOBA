import { request } from '../request'

export const getInputData = (model) => {
  return request({
    url: '/heros',
    method: 'post',
    data: model
  })
}

export const getSetInputData = (id) => {
  return request({
    url: `/heros/${id}`,
    method: 'get'
  })
}

export const getUpdata = (id, model) => {
  return request({
    url: `/heros/${id}`,
    method: 'put',
    data: model
  })
}