const Mock = require('mockjs')
const __request = wx.request

Object.defineProperty(wx, 'request', { writable: true })

// mock 拦截请求
wx.request = function(config) {
  if(typeof Mock._mocked[config.url] === 'undefined') {
    __request(config)
    return
  }

  const resTemplate = Mock._mocked[config.url].template
  const response = Mock.mock(resTemplate)

  // console.log('mock: => ', response)
  if(typeof config.success === 'function') {
    config.success(response)
  }

  if(typeof config.complete === 'function') {
    config.complete(response)
  }
}

module.exports = Mock
