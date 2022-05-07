import { request } from "../request";

export const getListData = () => {
  return request({
    url: '/categories'
  })
}

export const getDelData = (id) => {
  return request({
    url: `/categories/${id}`,
    method: 'delete'
  })
}