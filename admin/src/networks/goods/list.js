import { request } from "../request";

export const getGoodsData = () => {
  return request({
    url: '/items'
  })
}

export const getDelData = (id) => {
  return request({
    url: `/items/${id}`,
    method: 'delete'
  })
}