<template>
  <main class="main">
    <form class="user-from">
      <van-cell-group title="个人信息">

        <van-field
          required
          label="姓名"
          placeholder="请输入"
          input-align="right"
          :value="data.userName"
          :error="error.userName"
          @input="({mp}) => { data.userName = mp.detail }"
          @change="onUsernameChange"
          @blur="onUsernameBlur"
        />

        <van-cell
          title="出生日期"
          is-link
          :value="data.birthday"
          @click="onBirthdayClick"
        />

        <van-cell
          title="工作年限"
          is-link
          :value="data.birthday"
          @click="onBirthdayClick"
        />

        <van-field
          label="联系邮箱"
          placeholder="请输入"
          input-align="right"
          maxlength="19"
          :value="data.wechatNo"
          :error="error.wechatNo"
          @focus="() => { error.wechatNo = null }"
          @input="({mp}) => { data.wechatNo = mp.detail }"
          @change="onWeChatNoChange"
          @blur="onWeChatNoBlur"
        />

        <van-field
          required
          key="sssss"
          label="手机"
          placeholder="请输入"
          input-align="right"
          maxlength="11"
          type="number"
          :value="data.mobile"
          :error="error.mobile"
          @focus="() => { error.mobile = null }"
          @input="({mp}) => { data.mobile = mp.detail }"
          @change="onMobileChange"
          @blur="onMobileBlur"
        />

        <van-cell
          title="学历"
          is-link
          :value="data.education || '请添加'"
          @click="onEducationSelectShow"
        />

        <van-cell
          title="职称"
          is-link
          :value="data.visitorExperienceList ? '请选择' : '请添加'"
          link-type="navigateTo"
          url="/pages/dashboard/index"
        />
        <van-cell
          title="英语等级"
          is-link
          :value="data.entrepreneurship ? '已添加' : '请选择'"
          link-type="navigateTo"
          url="/pages/dashboard/index"
        />
      </van-cell-group>

    </form>
    <view class="resume-footer">
      <van-button @click="onClickNextBtn" type="info" round size="large">下一步</van-button>
    </view>
  </main>
</template>

<script>
  export default {
    name: 'resume-preview',
    data () {
      return {
        dataSource: { },
        data: { },
        error: { }
      }
    },

    methods: {
      onClickNav ({ target }) {

      },

      onClickNextBtn ({ target }) {
        console.log('-------')
        mpvue.navigateTo({ url: `/pages/resume-new/intention/main` })
      }
    },

    created () { }
  }
</script>

<style lang="less">
  @import "./style.less";
</style>
