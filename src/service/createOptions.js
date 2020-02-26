/**
 * Created by K on 2019/10/26.
 */
import { typeOf } from '../utils'
import storage from '../service/storage'
const METHOD = 'GET'
const JSON = 'json'
const HEADERS = {
  'content-type': 'application/json' // 默认值
}

export default async function(options) {
  options.methods = options.methods || METHOD
  options.header = options.header || HEADERS

  if (global.token) {
    options.header.token = mpvue.getStorageSync(storage.TOKEN)
  }

  if (typeOf(options.type) === 'undefined') {
    options.type = JSON
  }

  return options
}
