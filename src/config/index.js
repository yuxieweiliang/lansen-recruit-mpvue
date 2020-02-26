/**
 * Created by K on 2019/10/25.
 */
import network from './network'
import api from './api'
import * as icon from './icons'
import data from './data'
import auth from './authSetting'

// 公司 logo
const logo = '/static/images/logo.gif'
// 客服微信二维码
const qrCodeCall = '/static/images/qrCode-Call.gif'
// 客服微信二维码
const logoBottom = '/static/images/logo-bottom.png'

// 支持 import { network } 的方式导出
export {
  network,
  data,
  api,
  icon,
  logo,
  logoBottom,
  qrCodeCall
}

export default {
  network,
  data,
  api,
  auth,
  icon
}
