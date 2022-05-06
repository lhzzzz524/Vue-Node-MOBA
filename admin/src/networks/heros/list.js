import { request } from "../request";

export const getListData = () => {
  return request({
    url: '/heros'
  })
}

export const getDelData = (id) => {
  return request({
    url: `/heros/${id}`,
    method: 'delete'
  })
}