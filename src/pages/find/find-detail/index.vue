<template>
  <div>
    <div class="popular-posts">
      <p class="popular-title">
        各公司开发人员收入整理中（不断更新中，主要针对择业期同学）
      </p>
      <p class="popular-author">
        李一刀123
        <span class="view-people">510114人看过</span>
      </p>
    </div>
    <div class="post-content">
      原题：各公司开发人员收入整理中（不断更新中，主要针对择业期同学）
    </div>
    <!--    回到顶部按钮-->
    <div class="shareBtn">
      <van-icon name="arrow-up" size="50rpx" color="deepskyblue" class="icon-share"/>
      <span class="shareText">TOP</span>
    </div>
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
  .popular-posts{
    font-size:36rpx;
    color:#000;
    border-bottom:1px solid #aaa;
    background:#fff;
    padding:30rpx 20rpx;
    box-sizing:border-box;
  }
  .popular-title{
    line-height:50rpx;
  }
  .popular-author{
    color:#ccc;
    font-size:30rpx;
    line-height:40rpx;
    margin:20rpx 0;
  }
  .view-people{
    color:#ccc;
    margin-left:30rpx;
  }
  .post-content{
    color:#000;
    font-size:32rpx;
  }
  /*回到顶部按钮*/
  .shareBtn{
    width:80rpx;
    height:80rpx;
    border-radius:50%;
    background:#fff;
    position:fixed;
    right:20rpx;
    bottom:60rpx;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:deepskyblue;
    font-size:20rpx;
    border:1px solid red;
  }
  .shareText{
    margin-top:4rpx;
    font-size:20rpx;
  }
</style>
