import { request } from "../request";

export const getListData = () => {
  return request({
    url: '/article'
  })
}

export const getDelData = (id) => {
  return request({
    url: `/article/${id}`,
    method: 'delete'
  })
}