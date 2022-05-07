import { request } from "../request";

export const getListData = () => {
  return request({
    url: '/advertising'
  })
}

export const getDelData = (id) => {
  return request({
    url: `/advertising/${id}`,
    method: 'delete'
  })
}