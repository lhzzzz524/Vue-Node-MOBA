import { request } from "../request";

export const getListData = () => {
  return request({
    url: '/adminUsers'
  })
}

export const getDelData = (id) => {
  return request({
    url: `/adminUsers/${id}`,
    method: 'delete'
  })
}