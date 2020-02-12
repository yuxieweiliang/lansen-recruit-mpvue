<template>
  <main class="main">
    <form class="user-from">
      <van-cell-group title="你的最高学历">

        <van-cell
          title="学校名称"
          is-link
          :value="data.birthday"
          @click="onBirthdayClick"
        />

        <van-cell
          title="最高学历"
          is-link
          :value="data.birthday"
          @click="onBirthdayClick"
        />

        <van-field
          required
          label="专业"
          placeholder="请输入"
          input-align="right"
          :value="data.userName"
          :error="error.userName"
          @input="({mp}) => { data.userName = mp.detail }"
          @change="onUsernameChange"
          @blur="onUsernameBlur"
        />

        <van-cell
          title="入学时间"
          is-link
          :value="data.visitorExperienceList ? '请选择' : '请添加'"
          link-type="navigateTo"
          url="/pages/dashboard/index"
        />

        <van-cell
          title="毕业时间"
          is-link
          :value="data.visitorExperienceList ? '请选择' : '请添加'"
          link-type="navigateTo"
          url="/pages/dashboard/index"
        />

      </van-cell-group>

    </form>
    <view class="resume-footer">
      <van-button type="info" round size="large" @click="onClickNextBtn">下一步</van-button>
    </view>
  </main>
</template>

<script>
  import LsRadioGroup from '../LsRadioGroup'

  export default {
    name: 'resume-new',
    components: {
      LsRadioGroup
    },
    data () {
      return {
        dataSource: { },
        data: { },
        error: { }
      }
    },

    methods: {
      onClickNextBtn ({ target }) {
        mpvue.navigateTo({ url: `/pages/resume/new/experience-new/main` })
      },

      onClickItem ({ target }) { }
    },

    created () { }
  }
</script>

<style lang="less">
  @import "../style.less";
</style>
