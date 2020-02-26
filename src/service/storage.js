/**
 * Created by K on 2019/10/26.
 */
import * as keys from '../config/storage-key'

const datetime = new Date().getTime()
const expires = 365 * 24 * 60 * 60 * 10000 // 默认七天

const funcs = [
  'setStorage',
  'removeStorage',
  'getStorageInfo',
  'getStorage',
  'clearStorage'
]
function Storage(options = {}) {
  this.expires = options.expires || expires
  this.datetime = options.datetime || datetime
  for(let key in keys) {
    this[key] = keys[key]
  }
}

function create(funcName) {
  if(funcName.indexOf('set') === 0) {
    Storage.prototype[funcName] = function(key, data) {
      return new Promise((resolve, reject) => {
        wx[funcName]({
          key,
          data: {...data, expires: this.expires},
          success(res) {
            resolve({ok: true, ...res})
          },
          fail(errMsg) {
            errMsg.ok = false
            reject(errMsg)
            console.error(errMsg)
          }
        })
      })
    }
  } else {
    Storage.prototype[funcName] = function(key) {
      return new Promise((resolve, reject) => {
        wx[funcName]({
          key,
          success(res) {
            resolve({ok: true, ...res})
          },
          fail(errMsg) {
            // errMsg: "getStorage:fail data not found"
            errMsg.ok = false
            reject(errMsg)
            console.error(errMsg, 'key')
          }
        })
      })
    }
  }
}

for(let key in funcs) {
  create(funcs[key])
}

let storage = new Storage()

export default storage
