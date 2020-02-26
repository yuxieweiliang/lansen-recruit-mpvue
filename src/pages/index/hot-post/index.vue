<template>
  <div>
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
            西安市郎生网络科技有限公司
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
            西安市郎生网络科技有限公司
          </van-row>
        </div>

      </div>
    </van-panel>
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

<style lang="less">
  @import "./style.less";
</style>
