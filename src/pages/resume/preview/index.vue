<template>
  <div id="preview-container">
<!--    我是简历预览页面-->

<!--    <van-panel title="基本信息"  use-footer-slot>-->
<!--      <view>内容</view>-->
<!--      <view slot="footer">-->
<!--        <van-button size="normal" type="info" icon="share" round >分享</van-button>-->
<!--        <van-button size="normal" type="info" icon="down" round >下载</van-button>-->
<!--      </view>-->
<!--    </van-panel>-->
<!--    基本信息-->
    <div class="introduction">
      <p class="introduction-item">
        <span class="introduction-name">小明</span>
        <span>男士/25岁</span>
      </p>
      <p class="introduction-item">
        西安欧亚学院<span class="long-string">|</span>
        本科<span class="long-string">|</span>
        工作3年
      </p>
    </div>
    <div class="item-info">
      <p class="item-title">基本信息</p>
      <p class="personal-info">
        <span class="personal-title">出生年月</span>
        <span class="personal-content">2000-01</span>
      </p>
      <p class="personal-info">
        <span class="personal-title">工作年限</span>
        <span class="personal-content">5年工作经验</span>
      </p>
      <p class="personal-info">
        <span class="personal-title">现居住地</span>
        <span class="personal-content">陕西西安市</span>
      </p>
      <p class="personal-info">
        <span class="personal-title">户籍地</span>
        <span class="personal-content">陕西西安市</span>
      </p>
      <p class="personal-info">
        <span class="personal-title">职称等级</span>
        <span class="personal-content">中级</span>
      </p>
      <p class="personal-info">
        <span class="personal-title">是否规培</span>
        <span class="personal-content">未规培</span>
      </p>
      <p class="personal-info">
        <span class="personal-title">英语等级</span>
        <span class="personal-content">英语四级</span>
      </p>
    </div>
<!--    联系方式-->
    <div class="item-info">
      <p class="item-title">联系方式</p>
      <p class="personal-info">
        <span class="personal-title"><van-icon name="phone" color="#aaa" size="32rpx"/></span>
        <span class="personal-content">12345678900</span>
      </p>
      <p class="personal-info">
        <span class="personal-title"><van-icon name="chat" color="#aaa" /></span>
        <span class="personal-content">767435339@qq.com</span>
      </p>
    </div>
    <!--    求职意向-->
    <div class="item-info">
      <p class="item-title">求职意向</p>
      <p class="personal-info">
        <span class="personal-title"><van-icon name="smile" color="#aaa" size="32rpx"/></span>
        <span class="personal-content">离职</span>
      </p>
      <p class="personal-info">
        <span class="personal-title"><van-icon name="column" color="#aaa" /></span>
        <span class="personal-content">普通内科</span>
      </p>
      <p class="personal-info">
        <span class="personal-title"><van-icon name="location" color="#aaa" /></span>
        <span class="personal-content">重庆</span>
      </p>
    </div>
    <!--    实习/工作经历-->
    <div class="item-info">
      <p class="item-title">实习/工作经历</p>
      <p class="personal-info">
        前端
        <span class="long-string">|</span>
        朗生网络技术
      </p>
      <p class="personal-info info-time">
        2019-12 至 2021-12
      </p>
      <p class="personal-info info-desc">
        软件研发工作
      </p>
    </div>
    <!--    教育经历-->
    <div class="item-info last-item-info">
      <p class="item-title">教育经历</p>
      <p class="personal-info">
        西安欧亚学院
      </p>
      <p class="personal-info info-time">
        2019-12 至 2021-12
      </p>
      <p class="personal-info info-desc">
        本科
        <span class="long-string">|</span>
        通信工程
      </p>
    </div>
<!--    底部按钮-->
    <div class="footerBtn">
      <div class="btn">
        <van-icon name="share" color="#fff" class="iconBtn"/>分享
      </div>
      <div class="btn">
        <van-icon name="down" color="#fff" class="iconBtn"/>下载
      </div>
    </div>
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
  #preview-container{
    font-size:32rpx;
    color:#000;
  }
  .introduction{
    margin:40rpx 0;
  }
  .introduction-item{
    height:80rpx;
    line-height:80rpx;
  }
  .introduction-name{
    font-size:40rpx;
    margin-right:30rpx;
  }
  .item-info{
    margin-bottom:40rpx;
  }
  .item-title{
    color:blue;
    height:100rpx;
    line-height:100rpx;
  }
  .personal-info{
    height:60rpx;
    line-height:60rpx;
  }
  .personal-title{
    color:#aaa;
    margin-right:20rpx;
  }
  .personal-content{

  }
  .long-string{
    color:#aaa;
  }
  .info-time{
    font-size:28rpx;
    color:#aaa;
  }
  .last-item-info{
    margin-bottom:40rpx;
  }
  /*底部按钮*/
  .footerBtn{
    width:100%;
    height:100rpx;
    position:fixed;
    bottom:0;
    display:-webkit-flex;
    -webkit-justify-content:space-around;
    -webkit-align-items:center;
    margin-bottom:20rpx;
  }
  .btn{
    background:skyblue;
    color:#fff;
    font-size:30rpx;
    width:45%;
    text-align:center;
    height:80rpx;
    line-height:80rpx;
    border-radius:60rpx;
  }
  .iconBtn{
    margin-right:30rpx;
  }
</style>
