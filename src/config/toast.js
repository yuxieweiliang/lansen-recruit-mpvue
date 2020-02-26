/**
 * Created by K on 2019/11/1.
 */
const green = '/static/images/suc_green@2x.png'

export const success = {
  great: {
    title: '点赞成功',
    image: green
  },
  collection: {
    title: '收藏成功',
    image: green
  },
  share: {
    title: '分享二维码已保存到系统相册，快去分享给更多人吧！',
    image: green
  }
}

export const cancel = {
  great: {
    title: '取消点赞',
    icon: 'fail'
  },
  collection: {
    title: '取消收藏',
    icon: 'fail'
  }
}

export const fail = {
  great: {
    title: '点赞失败',
    icon: 'fail'
  },
  collection: {
    title: '收藏失败',
    icon: 'fail'
  },
  share: {
    title: '二维码图片保存失败，请稍后再试！',
    icon: 'fail'
  }
}

export default { success, cancel, fail }
