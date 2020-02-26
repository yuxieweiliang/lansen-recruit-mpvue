<template>
  <main class="main">
    <view class="recruit-describe">
      <view>
        需要你提供一下信息，
      </view>
      <view>
        用于为你提供推荐岗位。
      </view>
    </view>
    <van-cell-group>
      <van-cell
        title="意向职位"
        is-link
        value="请选择"
        @click="onPositionShow"
      />

      <van-cell
        title="工作地点"
        is-link
        value="请选择"
        @click="onAddressShow"
      />

      <van-cell
        title="期望资信"
        is-link
        value="请选择"
        @click="onSalaryShow"
      />

    </van-cell-group>

    <view class="submit">
      <van-button round size="large" type="info" @click="showPowerPopup">订阅职位</van-button>
    </view>

    <van-popup :show="popup.show" @close="closePowerPopup" position="bottom" round custom-style="height: 40%">
      <view class="power-container">
        <view class="power-header">
          朗生网络 | 招聘求职中心 申请
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

    <van-popup
      position="bottom"
      :show="selectSalary.show"
      @close="onSelectSalaryClose"
    >
      <van-picker
        show-toolbar
        :columns="selectSalary.columns"
        @cancel="onSelectCancel"
        @confirm="onSelectConfirm"
      />
    </van-popup>
  </main>
</template>

<script>
  export default {
    name: 'intention',
    data () {
      return {
        popup: {
          show: false
        },
        selectSalary: {
          show: false,
          columns: [
            {
              values: [0, '1000', '2000', '3000', '4000', '5000', '6000', '7000', '8000', '9000'],
              defaultIndex: 2
            },
            {
              values: ['1000', '2000', '3000', '4000', '5000', '6000', '7000', '8000', '9000', '10000'],
              defaultIndex: 2
            }
          ]
        },
        banners: [
          {src: '/static/images/banner_01.png'},
          {src: '/static/images/banner_01.png'}
        ]
      }
    },

    methods: {
      showPowerPopup () {
        this.popup.show = true
      },
      closePowerPopup () {
        this.popup.show = false
      },
      onPositionShow () {
        mpvue.navigateTo({ url: `/pages/tree-select/position/main` })
      },
      onAddressShow () {
        mpvue.navigateTo({ url: `/pages/tree-select/address/main` })
      },
      onSalaryShow () {
        this.selectSalary.show = true
      },
      onSelectSalaryClose () {
        this.selectSalary.show = false
      },
      onSelectCancel () {
        this.selectSalary.show = false
      },
      onSelectConfirm () {
        this.selectSalary.show = false
      }
    },

    created () {}
  }
</script>

<style lang="less">
  @import "./style.less";
</style>
