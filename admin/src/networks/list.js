import { request } from "./request";

export const getListData = () => {
  return request({
    url: '/categories'
  })
}