<template>
  <main class="main">
    <div style="position: absolute; top: 0; z-index: 9; width: 100vw">
      <van-search placeholder="请输入搜索关键词" background="transparent"/>
    </div>
    <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000" circular="true">
      <block v-for="(item, index_banner) in banners" :key="index_banner">
        <swiper-item>
          <section class="banner"><img src="/static/images/banner_01.png" alt=""></section>
        </swiper-item>
      </block>
    </swiper>

    <van-grid column-num="3">
      <van-grid-item icon="photo-o" text="急招" />
      <van-grid-item icon="photo-o" text="专场" />
      <van-grid-item icon="photo-o" text="订阅" />
    </van-grid>
    <section class="banner"><img style="height: 200rpx;" src="/static/images/banner_01.png" alt=""></section>

    <van-panel title="推荐职位">
      <div class="custom-panel-body">
        <div class="recruit-item">
          <van-row class="recruit-title">
            <van-col :span="16" class="recruit-text">生物信息分析主管</van-col>
            <van-col :span="8" class="recruit-more">1.2-1.4k</van-col>
          </van-row>

          <van-row class="recruit-address">
            <van-col :span="16" class="recruit-text">西安市未央区 | 1-3年 | 硕士</van-col>
            <van-col :span="8" class="recruit-more">02/08</van-col>
          </van-row>

          <van-row>
            <van-tag plain type="primary" style="margin-right: 10rpx;">五险一金</van-tag>
            <van-tag plain type="success" style="margin-right: 10rpx;">节日福利</van-tag>
            <van-tag plain type="danger">带薪年假</van-tag>
          </van-row>
          <van-row class="address">
            西安市朗生网络科技有限公司
          </van-row>
        </div>
        <div class="recruit-item">
          <van-row class="recruit-title">
            <van-col :span="16" class="recruit-text">生物信息分析主管</van-col>
            <van-col :span="8" class="recruit-more">1.2-1.4k</van-col>
          </van-row>

          <van-row class="recruit-address">
            <van-col :span="16" class="recruit-text">西安市未央区 | 1-3年 | 硕士</van-col>
            <van-col :span="8" class="recruit-more">02/08</van-col>
          </van-row>

          <van-row>
            <van-tag plain type="primary" style="margin-right: 10rpx;">五险一金</van-tag>
            <van-tag plain type="success" style="margin-right: 10rpx;">节日福利</van-tag>
            <van-tag plain type="danger">带薪年假</van-tag>
          </van-row>
          <van-row class="address">
            西安市朗生网络科技有限公司
          </van-row>
        </div>

      </div>
    </van-panel>
  </main>
</template>

<script>
export default {
  data () {
    return {
      time: new Date().getDate(),
      banners: [
        {src: '/static/images/banner_01.png'},
        {src: '/static/images/banner_01.png'}
      ]
    }
  },

  methods: {
    routerToFrom () {
      window.location.href = './join.html'
      console.log(this)
    },
    routerToDetails () {
      window.location.href = './details.html'
      console.log(this)
    }
  },

  created () {}
}
</script>

<style lang="less">
@import "./style.less";
</style>
