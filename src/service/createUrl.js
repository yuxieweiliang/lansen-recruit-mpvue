/**
 * Created by K on 2019/10/24.
 */
import { network } from '../config'
import logger from '../utils/logger'

class CreateUrl {
  constructor (options) {
    this.protocol = options.protocol
    this.host = options.host
    this.origin = `${options.protocol}://${options.host}`
  }

  /**
   * 创建 请求 URL
   * 如果是 MOCK 环境，不返回 origin(域名) 部分，复用本地服务，拦截
   * @param options
   * @returns {string}
   */
  url (options) {
    if (!options.url) throw new Error(`options.url is not find!`)

    // console.log('CreateUrl.url: => ', options)
    let [ path, search ] = options.url.trim().split('?')

    path = this.template(path, options.path)
    search = this.search(search, options.search)

    if (path.indexOf('?') < 0) {
      let index = path.lastIndexOf('/')
      let length = path.length

      if (index === length - 1) {
        path = path.substring(0, index)
      }
    }

    if (search) {
      if (path.indexOf('?') > -1) {
        path = `${path}&${search}`
      } else {
        path = `${path}?${search}`
      }
    }

    if (path.indexOf('/') === 0) {
      path = path.substring(1, path.length)
    }

    if (typeof NETWORK === 'string' && NETWORK === 'MOCK') {
      return `/${path}`
    }

    // console.log(`${ this.origin }/${ path }`)
    return `${ this.origin }/${ path }`
  }

  /**
   * 讲字符串模板，转换为 url 路径
   * template("/path/{  page  }/{size}", {page: 12, size: 20}) => /page/12/20
   * @param str
   * @param obj
   */
  template(str, obj) {
    return str.replace(/\{(\s*\w+\s*)\}/g, (match, string) => {
      const value = obj[string.trim()]
      if (!value) throw new Error(`url path "${match}" is not find!`)
      return value
    })
  }

  /**
   * search("page=&size=", {page: 1, size: 2}) => "page=1&size=2"
   * @param search
   * @param options
   * @returns {string}
   */
  search(search, options = {}) {
    if (!search) return
    return search.replace(/(\w+)=/g, (match, string) => {
      return match + (options[string.trim()] ? options[string.trim()] : '')
    })
  }
}

const createUrl = new CreateUrl(network)
logger.log('network: ', network)
export default createUrl
