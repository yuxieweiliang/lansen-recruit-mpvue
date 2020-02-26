<template>
  <main class="main">
    <form class="user-from">
      <van-cell-group title="你的求职意向">

        <van-cell
          title="求职状态"
          is-link
          :value="data.birthday"
          @click="onBirthdayClick"
        />

        <van-cell
          title="意向职能"
          is-link
          :value="data.birthday"
          @click="onBirthdayClick"
        />

        <van-cell
          title="意向城市"
          is-link
          :value="data.education || '请添加'"
          @click="onEducationSelectShow"
        />

        <van-cell
          title="期望薪资"
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
  import LsRadioGroup from '../../../components/LsRadioGroup'

  export default {
    name: 'resume-new-intention',
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
      onClickNav ({ target }) { },

      onClickNextBtn ({ target }) {
        mpvue.navigateTo({ url: `/pages/resume/new-education/main` })
      }
    },

    created () { }
  }
</script>
