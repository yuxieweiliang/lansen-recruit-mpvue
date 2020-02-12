/**
 * Created by K on 2019/11/18.
 */
import address from './address'

const isAny = [{value: 'no', label: '否'}, {value: 'yes', label: '是'}]
const hasAny = [{value: 'no', label: '无'}, {value: 'yes', label: '有'}]
export default {
  gander: [{value: '0', label: '男'}, {value: '1', label: '女'}],

  // marriage: [{id: 'yes', value: '已婚'},{id: 'no', value: '未婚'}],

  // education: [{name: '博士'}, {name: '硕士'}, {name: '本科'}, {name: '专科'}, {name: '高中'}, {name: '其他'}],
  education: ['博士', '硕士', '本科', '专科', '高中', '其他'],

  hasDesigner: hasAny,
  designerNum: ['1-100', '101-200', '201-300', '301-400', '401-500', '500以上'],

  hasDecoration: hasAny,
  decorationNum: ['1-50', '51-100', '101-150', '151-200', '200以上'],

  findWay: [
    {id: 'exhibition', value: '展会'},
    {id: 'visit', value: '业务人员上门'},
    {id: 'recommend', value: '亲友推荐'},
    {id: 'circle', value: '朋友圈'},
    {id: 'advertise', value: '广告'},
    {id: 'other', value: '其它'}
  ],

  entrepreneurship: {
    // ['独资', '合伙'],
    type: [{id: 'sole', name: '独资'}, {id: 'partner', name: '合伙'}],
    // ['自有', '融资'],
    capital: [{id: 'yes', name: '自有'}, {id: 'no', name: '融资'}]
  },
  // 合作类型
  cooperationType: [{id: 'operation', name: '城市运营中心'}, {id: 'distributor', name: '分销商'}],
  // 经营类型
  operateType: [{id: 'personal', name: '个人经营'}, {id: 'partner', name: '合伙经营'}],
  // 经营方式
  managementType: [{id: 'personal', name: '本人管理'}, {id: 'relatives', name: '亲属好友管理'}, {id: 'external', name: '外聘管理'}],
  // 备选场地 有 | 无
  hasSpareSite: hasAny,
  // 场地性质
  siteNature: [{id: 'personal', name: '自有'}, {id: 'lease', name: '租赁'}],
  // 是否需要协助
  needSite: isAny,
  // 需要类型
  siteType: [{id: 'office', name: '写字楼'}, {id: 'park', name: '创业创意园区'}],

  address: assembleAddress(address)
}

function assembleAddress (data) {
  return data.map(function (item) {
    if (item.children) {
      return Object.assign({}, item, {
        childs: item.children.map(item => item),
        children: null
      })
    } else {
      return item
    }
  })
}

/*
function assembleAddress(data) {
  return data.map(function (item) {
    if(item.children) {
      var children = assembleAddress(item.children);
      return Object.assign(item, {childs: children})
    } else {
      return item;
    }
  })
} */
