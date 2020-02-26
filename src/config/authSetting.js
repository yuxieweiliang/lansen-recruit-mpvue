// 是否授权用户信息，对应接口 wx.getUserInfo
export const userInfo = 'scope.userInfo'

// 是否授权地理位置，对应接口 wx.getLocation, wx.chooseLocation
export const userLocation = 'scope.userLocation'

// 是否授权通讯地址，对应接口 wx.chooseAddress
export const address = 'scope.address'

// 是否授权发票抬头，对应接口 wx.chooseInvoiceTitle
export const invoiceTitle = 'scope.invoiceTitle'

// 是否授权获取发票，对应接口 wx.chooseInvoice
export const invoice = 'scope.invoice'

// 是否授权微信运动步数，对应接口 wx.getWeRunData
export const werun = 'scope.werun'

// 是否授权录音功能，对应接口 wx.startRecord
export const record = 'scope.record'

// 是否授权保存到相册 wx.saveImageToPhotosAlbum, wx.saveVideoToPhotosAlbum
export const writePhotosAlbum = 'scope.writePhotosAlbum'

// 是否授权摄像头，对应[camera]((camera)) 组件
export const camera = 'scope.camera'

// 是否授权订阅消息推送功能，对应接口 wx.requestSubscribeMessage
export const subscribeMessage = 'scope.subscribeMessage'

export default {
  userInfo,
  userLocation,
  address,
  invoiceTitle,
  invoice,
  werun,
  record,
  writePhotosAlbum,
  camera,
  subscribeMessage
}
