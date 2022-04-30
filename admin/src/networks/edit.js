import { request } from './request'

export const getInputData = (model) => {
  return request({
    url: '/categories',
    method: 'post',
    data: {
      'name': model.name
    }
  })
}