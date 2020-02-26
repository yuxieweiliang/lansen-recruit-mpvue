/**
 * Created by K on 2019/10/23.
 */
const Mock = require('./WxMock.js')
const data = require('./data.json')

const {
  example_menu: caseMenu,
  pattern_menu: patternMenu,
  style_menu: styleMenu,
  address_menu: addressMenu,
  jobs_menu: jobsMenu
} = data

console.log(caseMenu, addressMenu, jobsMenu)
/**
 * 生成一句中文
 * Mock.Random.csentence(8, 12)
 * 生成一个标题
 * Mock.Random.ctitle(8, 12)
 * 生成一张图片
 * Mock.Random.image('200x100')
 */
Mock.mock('/banners', {
  code: 200,
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'data|4-6': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    src: '@image(700x330)',
    title: '@ctitle(8, 12)'
  }]
})

Mock.mock('/getProductList', {
  code: 200,
  'data|5-20': [{
    'id|+1': 1,
    src: '@image("300x200")',
    title: '@ctitle(8, 12)',
    great: '@integer(10, 200)',
    collection: '@integer(10, 200)',
    lookAt: '@integer(0, 9999)'
  }]
})

Mock.mock('/getProductList', {
  code: 200,
  'data|5-20': [{
    'id|+1': 1,
    src: '@image(360x200, #f1baba)',
    title: '@ctitle(4, 5)',
    code: 'M@integer(1000, 9999)-@integer(0, 9)',
    great: '@integer(10, 200)',
    collection: '@integer(10, 200)',
    lookAt: '@integer(0, 9999)'
  }]
})
/*
   src: String,
   great: Number,
   lookAt: Number,
   collection: Number,
   example: String,
   // 装饰 | 风格
   style: String,
   // 花色 | 图案
   pattern: Array
 */
Mock.mock('/getNewCaseList', {
  code: 200,
  'data|5-20': [{
    'id|+1': 1,
    src: '@image(730x260, #bbaae6)',
    great: '@integer(10, 200)',
    collection: '@integer(10, 200)',
    lookAt: '@integer(0, 9999)',
    example: '@ctitle(4, 4)',
    style: '@ctitle(4, 4)',
    'pattern|1-5': [{
      'id|+1': 0,
      number: 'M@integer(1000, 9999)-@integer(0, 9)'
    }]
  }]
})

Mock.mock('/getStyleMenu', {
  code: 200,
  data: styleMenu
})

Mock.mock('/getPatternMenu', {
  code: 200,
  data: patternMenu
})

Mock.mock('/getAddressList', {
  code: 200,
  data: addressMenu
})

Mock.mock('/getJobList', {
  code: 200,
  data: jobsMenu
})
