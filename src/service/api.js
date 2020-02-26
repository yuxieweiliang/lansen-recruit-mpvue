/* eslint-disable */
import mockApi from '../../mock/api'
/**
 * url: request
 * method: 默认 GET
 * header: 默认 {
 *    'content-type': 'application/json' // 默认值
 * }
 */

let api = {

  // 登陆
  login: {
    url: '/api/auth/ignore/applet/login?code=&openId=',
    method: 'GET',
  },
  // 修改用户信息
  updateWechatUserMessage: {
    url: '/api/auth/ignore/account/wechat/update',
    method: 'POST'
  },
  // ---------------------------------------------------------------
  // list product
  getProductList: {
    method: 'POST',
    url: '/api/goods/base/color/page?page=&limit=&ascCols=&descCols='
  },
  // list example
  getExampleList: {
    method: 'POST',
    url: '/api/goods/cases/page?page=&limit=&ascCols=&descCols='
  },
  // list notice used by banners
  getNoticeList: {
    method: 'POST',
    url: 'api/pf/notice/page?page=&limit=&ascCols=&descCols='
  },



}

// 如果是 mock 环境，则使用 mock api
if(typeof NETWORK === 'string' && NETWORK === 'MOCK') {
  api = mockApi
}


export default api
