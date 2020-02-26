<template>
  <div class="special-container">
    <section class="banner"><img style="width:100%;height: 200rpx;" src="/static/images/banner_01.png" alt=""></section>
    <van-row class="recruit-desc">
      <van-col span="19" offset="1" class="recruit-item">
        <p class="recruit-title">2020中高级开发工程师专场网络招聘会</p>
        <p class="recruit-date">2020/02/22</p>
      </van-col>
      <van-col span="3" class="recruit-item">
        <van-button type="default" round size="small" color="#7232dd">进行中</van-button>
      </van-col>
    </van-row>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },

    methods: {},

    created () {}
  }
</script>

<style scoped>
  .special-container{
    background-color:#fff;
    /*border:1px solid red;*/
  }
  .recruit-desc{
    width:100%;
    background:#fff;
  }
  .recruit-item{
    margin-top:20rpx;
    padding:20rpx 0;
    box-sizing:border-box;
  }
  .recruit-title{
    font-size:32rpx;
    color:#000;
    height:60rpx;
    line-height:60rpx;
  }
  .recruit-date{
    font-size:20rpx;
    color:#ccc;
    height:40rpx;
    line-height:40rpx;
  }
</style>
