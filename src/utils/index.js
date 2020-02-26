export function search (options) {
  return options ? Object.entries(options).map(item => item.join('=')).join('&') : ''
}

export function typeOf (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

export function createParams (params) {
  let string = ''

  // 如果是 字符串
  if (typeOf(params, 'string')) {
    string += params
  } else if (typeOf(params, 'object')) {
    // 如果是 对象
    for (let key in params) {
      string += `${key}=${params[key]}&`
    }
  } else {
    console.log('params is no string or object')
  }
  return string.substring(0, string.length - 1)
}
