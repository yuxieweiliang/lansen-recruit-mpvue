<template>
  <div>
    <div class="workplace-gossip">
      <p class="gossip-title">
        职场八卦圈
      </p>
      <p class="gossip-desc">
        在这里你将能获取到从软件开发行业到薪资的各种八卦每天爆笑更新
      </p>
      <div class="gossip-host">
        <p>主持人</p>
        <div class="subscrib">
          <van-icon name="plus" color:deepskyblue class="icon-plus"/>
          订阅
        </div>
      </div>
    </div>
    <van-tabs :active="active" @change="onChange">
      <van-tab title="热门帖子">
        <div class="popular-posts">
          <p class="popular-title">
            各公司开发人员收入整理中（不断更新中，主要针对择业期同学）
          </p>
          <p class="popular-author">
            李一刀123
            <span class="view-people">510114人看过</span>
          </p>
        </div>
        <div class="popular-posts">
          <p class="popular-title">
            各公司开发人员收入整理中（不断更新中，主要针对择业期同学）
          </p>
          <p class="popular-author">
            李一刀123
            <span class="view-people">510114人看过</span>
          </p>
        </div>
        <div class="popular-posts">
          <p class="popular-title">
            各公司开发人员收入整理中（不断更新中，主要针对择业期同学）
          </p>
          <p class="popular-author">
            李一刀123
            <span class="view-people">510114人看过</span>
          </p>
        </div>
      </van-tab>
      <van-tab title="我的收藏">
        <div class="gossip-collection">
          快去收藏更多帖子吧~
        </div>
      </van-tab>
    </van-tabs>
<!--    分享按钮-->
    <div class="shareBtn">
      <van-icon name="share" size="50rpx" color="deepskyblue" class="icon-share"/>
      <span class="shareText">分享</span>
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

<style>
  .workplace-gossip{
    background:blue;
    font-size:36rpx;
    color:#fff;
    padding:50rpx 20rpx;
    box-sizing:border-box;
  }
  .gossip-title{
    font-size:40rpx;
    color:#fff;
    height:80rpx;
    line-height:80rpx;
  }
  .gossip-desc{
    /*height:80rpx;*/
    /*line-height:80rpx;*/
    font-size:24rpx;
  }
  .gossip-host{
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:24rpx;
    height:100rpx;

  }
  .subscrib{
    color:deepskyblue;
    font-size:24rpx;
    background:#fff;
    border-radius:30rpx;
    /*text-align:center;*/
    /*vertical-align:middle;*/
    display:flex;
    align-items:center;
    justify-content:space-around;
    padding:12rpx 20rpx;
    box-sizing:border-box;
  }
  .icon-plus{
    margin-right:10rpx;
  }
  .gossip-collection{
    width:100%;
    height:100rpx;
    display:flex;
    justify-content:center;
    align-items:center;
  }
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
  /*分享按钮*/
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
