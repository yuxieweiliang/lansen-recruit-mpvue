/**
 * Created by K on 2019/10/24.
 */
import createUrl from './createUrl'
import createOptions from './createOptions'

/**
 * 创建 网络请求方法
 * 可以在before 方法中，如果有返回值，则返回对参数的重新定义
 */
export default async function createPromise (args) {
  args = { ...args, url: createUrl.url(args) }
  args = await createOptions(args) // 组装配置信息，与默认信息

  if (args.before && typeof args.before === 'function') {
    const options = args.before(args)
    if (options && typeof options === 'object') {
      args = options
    }
  }

  return new Promise(function (resolve) {
    /**
     * wx.request 发起 HTTPS 网络请求。
     * @param args
     *        属性          类型                        默认值     必填      说明
     *        url           string                      -           是       开发者服务器接口地址
     *        data          string/object/ArrayBuffer   -           否       请求的 body
     *        header        Object                      -           否       设置请求的 header，header 中不能设置 Referer。
     *                                                                       content-type 默认为 application/json
     *        method        string                      GET         否       HTTP 请求方法
     *        dataType      string                      json        否       返回的数据格式
     *        responseType  string                      text        否       响应的数据类型
     *        success       function                    -           否       接口调用 成功 的回调函数
     *        fail          function                    -           否       接口调用 失败 的回调函数
     *        complete      function                    -           否       接口调用结束的回调函数（调用成功、失败都会执行）
     * @returns {Promise}
     */
    wx.request({
      ...args,
      success: function (res) {
        const {statusCode, data} = res
        // console.log(res)
        if (statusCode === 200 && data.code === 200) {
          resolve(data)
        } else {
          resolve(false)
        }
      },
      fail: function () {
        resolve(false)
      }/* ,
      complete(data) {
        if(data.code === 200) {
          resolve(data)
        } else {
          reject(data)
        }
      } */
    })
  })
}
