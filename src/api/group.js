import axios from '../utils/api.request'
/**
 * 团购报名
 * @param {*} data
 */
export const usersJoin = (data) => {
  return axios.request({
    url: 'api/shop/users/join',
    method: 'post',
    data
  })
}

/**
 * 获取验证码
 * @param {*} data
 */
export const usersCode = (data) => {
  return axios.request({
    url: `api/shop/users/code`,
    method: 'get',
    params: data
  })
}

/**
 * 获取参加人数,到期时间信息
 * @param {*} data
 */
export const usersInfo = (data) => {
  return axios.request({
    url: `api/shop/users/info`,
    method: 'get',
    params: data
  })
}
