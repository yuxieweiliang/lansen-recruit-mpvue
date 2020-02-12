/**
 * Created by K on 2019/10/30.
 */

function search (options) {
  return options ? Object.entries(options).map(item => item.join('=')).join('&') : ''
}

// 首页
export function navigateToIndex (options) {
  const searchString = search(options)
  console.log('route To index', searchString)
  mpvue.navigateTo({ url: `/pages/index/main?${searchString}` })
}
// 首页
export function switchTabIndex (options) {
  const searchString = search(options)
  console.log('route To index', searchString)
  mpvue.switchTab({ url: `/pages/index/main?${searchString}` })
}

// 跳转到选择合作城市页
export function toCooperationAddress (options) {
  const searchString = search(options)
  console.log('route To default')
  mpvue.navigateTo({ url: `/pages/cooperation/address/main?${searchString}` })
}
export function toCooperation (options) {
  const searchString = search(options)
  console.log('route To default')
  mpvue.reLaunch({ url: `/pages/cooperation/main?${searchString}` })
}

// 产品列表
export function toAddress () {
  console.log('route To default')
  mpvue.redirectTo({ url: '/pages/cooperation/address/main' })
}

// 产品详情
export function toProductDetail (id) {
  console.log('产品详情', id)
  // mpvue.setStorageSync(storage.PATTERN, id)
  mpvue.navigateTo({ url: `/pages/product/details/main?id=${id}` })
}
