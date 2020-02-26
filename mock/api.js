/* eslint-disable */
/**
 * methods: 默认 GET
 * header: 默认 {
 *    'content-type': 'application/json' // 默认值
 * }
 */
export default {
  banners: {
    url: '/banners',
    methods: 'GET',
    header: {
      'content-type': 'application/json' // 默认值
    }
  },
  case: {
    url: '/case'
  },
  great: {
    methods: 'POST',
    url: '/great'
  },
  getProductList: {
    url: '/getProductList'
  }
}
