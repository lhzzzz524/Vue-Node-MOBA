import { request1 } from '../request'

export const getLogin = (model) => {
  return request1({
    url: '/login',
    method: 'post',
    data: model
  })
}