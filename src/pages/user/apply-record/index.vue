<template>
  <div>
    <van-tabs animated swipeable :active="active" @change="onChange">
      <van-tab title="推荐" class="tab-title">
        <div id="content-container">
          <div class="recommend">
            <p class="recommend-item post">
              web前端工程师
              <span class="salary">面议</span>
            </p>
            <div class="recommend-item location">
              <p class="recommend-left">
                陕西省西安市
                <span class="long-string">|</span>
                3-5年
                <span class="long-string">|</span>
                本科
              </p>
              <p class="recommend-date">02/20</p>
            </div>
            <p class="company">
              朗生网络技术有限公司
            </p>
          </div>
          <div class="recommend">
            <p class="recommend-item post">
              web前端工程师
              <span class="salary">面议</span>
            </p>
            <div class="recommend-item location">
              <p class="recommend-left">
                陕西省西安市
                <span class="long-string">|</span>
                3-5年
                <span class="long-string">|</span>
                本科
              </p>
              <p class="recommend-date">02/20</p>
            </div>
            <p class="company">
              朗生网络技术有限公司
            </p>
          </div>
          <div class="recommend">
            <p class="recommend-item post">
              web前端工程师
              <span class="salary">面议</span>
            </p>
            <div class="recommend-item location">
              <p class="recommend-left">
                陕西省西安市
                <span class="long-string">|</span>
                3-5年
                <span class="long-string">|</span>
                本科
              </p>
              <p class="recommend-date">02/20</p>
            </div>
            <p class="company">
              朗生网络技术有限公司
            </p>
          </div>
          <div class="recommend">
            <p class="recommend-item post">
              web前端工程师
              <span class="salary">面议</span>
            </p>
            <div class="recommend-item location">
              <p class="recommend-left">
                陕西省西安市
                <span class="long-string">|</span>
                3-5年
                <span class="long-string">|</span>
                本科
              </p>
              <p class="recommend-date">02/20</p>
            </div>
            <p class="company">
              朗生网络技术有限公司
            </p>
          </div>
        </div>
      </van-tab>
      <van-tab title="已投递">
        <div class="default">
          <van-icon name="warning-o" color="red" size="40rpx" class="icon-warning"/>
          再等等，还没收到反馈哦~
        </div>
      </van-tab>
      <van-tab title="智能代投">
        <van-divider contentPosition="center" customStyle="color: #1989fa;border-color: #1989fa;font-size: 32rpx;">您未开启智能代投服务</van-divider>
        <van-button  round  size="large" color="linear-gradient(to right, #4bb0ff, #6149f6)">开启智能代投</van-button>
      </van-tab>
      <van-tab title="被查看">
        <div class="default">
          <van-icon name="warning-o" color="red" size="40rpx" class="icon-warning"/>
          再等等，还没收到反馈哦~
        </div>
      </van-tab>
      <van-tab title="通过初筛">
        <div class="default">
          <van-icon name="warning-o" color="red" size="40rpx" class="icon-warning"/>
          再等等，还没收到反馈哦~
        </div>
      </van-tab>
      <van-tab title="邀请面试">
        <div class="default">
          <van-icon name="warning-o" color="red" size="40rpx" class="icon-warning"/>
          再等等，还没收到反馈哦~
        </div>
      </van-tab>
      <van-tab title="不合适">
        <div class="default">
          <van-icon name="warning-o" color="red" size="40rpx" class="icon-warning"/>
          再等等，还没收到反馈哦~
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        active: 0
      }
    },

    methods: {
      // onChange(event) {
      //   wx.showToast({
      //     title: `切换到标签 ${event.mp.detail.name}`,
      //     icon: 'none'
      //   })
      // }
    },

    created () {}
  }
</script>

<style scoped>
  .tab-title{
    margin-bottom:16rpx; /*没起作用？*/
  }
  #content-container{
    background:#ccc;
  }
  .recommend{
    background:#fff;
    width:100%;
    box-sizing: border-box;
    margin-top:16rpx!important;/*为什么对第一个div没起作用呢？*/
    padding:40rpx 20rpx;
    font-size:32rpx;
    color:#000;
  }
  .recommend-item{
    height:60rpx;
    line-height:60rpx;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .post{
    font-weight:bold;
    font-size:36rpx;
  }
  .salary{
    color:red;
  }
  .location{
    font-size:28rpx;
    color:#aaa;
  }
  .company{
    height:80rpx;
    line-height:80rpx;
    width:40%;
    overflow:hidden;
    white-space: nowrap;/*文本不会换行*/
    text-overflow:ellipsis;/*文本溢出显示省略号*/
  }
  .default{
    width:100%;
    height:160rpx;
    text-align:center;
    line-height:160rpx;
    background:#fff;
    font-size:30rpx;
    vertical-align:middle;
  }
  .icon-warning{
    margin-right:20rpx;
    vertical-align:middle;
  }
</style>
