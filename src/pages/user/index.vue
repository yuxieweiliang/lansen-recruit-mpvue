<template>
  <main class="main">
    <view class="user-theme">
      <view class="user-theme-left">
        <open-data class="user-avatar" type="userAvatarUrl"/>
        <open-data class="user-name" type="userNickName"/>
      </view>
      <view class="user-theme-right">
        <van-button>
          新建 ›
        </van-button>
      </view>
    </view>

    <van-grid>
      <van-grid-item icon="photo-o" text="刷新简历" @click="onReloadResumePanelShow"/>
      <van-grid-item icon="photo-o" text="订阅职位" @click="navigateToIntention"/>
      <van-grid-item icon="photo-o" text="应聘记录" />
      <van-grid-item icon="photo-o" text="职位收藏" />
    </van-grid>

    <van-cell-group>
      <van-cell
        title="账号信息"
        is-link
        value="请选择"
      />

      <van-cell
        title="消息中心"
        is-link
        value="请选择"
      />

      <van-cell
        title="邀请记录"
        is-link
        value="请选择"
      />

    </van-cell-group>

    <van-popup :show="show" @close="onClose" position="bottom" round custom-style="height: 40%">
      <view class="power-container">
        <view class="power-header">
          郎生网络 | 招聘求职中心 申请
        </view>
        <view class="power-body">
          <view class="power-body-text">
            发送一次以下消息
          </view>
          <view class="power-body-radio">
            <radio
              class="ls-radio"
              :checked="true"
            />
            新发布职位通知
          </view>
        </view>
        <van-row class="power-footer">
          <van-button class="power-button" type="default">取消</van-button>
          <van-button class="power-button" type="info">确定</van-button>
        </van-row>
      </view>
    </van-popup>

    <van-overlay :show="panel.show" @close="closeReloadResumePanelClose">
      <view class="overlay">
        <van-panel use-footer-slot custom-class="panel-container" >
          <view class="panel-header">
            <view class="panel-close"  @click="closeReloadResumePanelClose">X</view>
          </view>
          <view class="panel-body">
            <view>简历刷新成功！</view>
          </view>
          <view slot="footer" class="panel-footer">
            <van-button @click="closeReloadResumePanelClose" size="small">按钮</van-button>
            <van-button @click="closeReloadResumePanelClose" size="small" type="danger">按钮</van-button>
          </view>
        </van-panel>
      </view>
    </van-overlay>
  </main>
</template>

<script>
export default {
  data () {
    return {
      panel: {
        show: false
      },
      banners: [
        {src: '/static/images/banner_01.png'},
        {src: '/static/images/banner_01.png'}
      ]
    }
  },

  methods: {
    onReloadResumePanelShow () {
      this.panel.show = true
    },
    closeReloadResumePanelClose () {
      this.panel.show = false
    },
    navigateToIntention () {
      mpvue.navigateTo({ url: `/pages/intention/main` })
    },
    onClose () {
      console.log(this)
    }
  },

  created () {}
}
</script>

<style lang="less">
@import "./style.less";
</style>
