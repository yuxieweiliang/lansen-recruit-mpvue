/**
 * Created by K on 2019/11/14.
 */

const bagMonth = [1, 3, 5, 7, 8, 10, 12]
const mouth = {}

for (let i = 1; i < 13; i++) {
  mouth[i] = {
    start: 1,
    end: bagMonth.includes(i) ? 31 : 30
  }
}
const date = new Date()
const today = date.getDate()
const day = date.getDay()
const monday = today - day
const weekend = monday + 7

// 英语水平
const english = [
  {value: '请选择'},
  {value: '未参加'},
  {value: '英语四级'},
  {value: '英语六级'},
  {value: '专业四级'},
  {value: '专业八级'}
]

// 等级
const grade = [
  {value: '请选择'},
  {value: '未参加'},
  {value: '初级'},
  {value: '中级'},
  {value: '副高'},
  {value: '高级'}
]

// 等级
const status = [
  {value: '应届毕业生'},
  {value: '已离职，可立即上岗'},
  {value: '目前在职，正在考虑换个新环境'},
  {value: '满意现有工作，也会考虑机会'},
  {value: '暂无跳槽打算'}
]

// 等级
const school = [
  {value: '大专以下'},
  {value: '大专'},
  {value: '本科'},
  {value: '硕士'},
  {value: '博士'},
  {value: '博士后'}
]

export default {
  mouth,
  english,
  grade,
  school,
  status,
  thisWeek: {
    monday,
    weekend
  }
}
