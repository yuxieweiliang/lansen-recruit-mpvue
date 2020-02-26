<template>
  <main class="main">
    <textarea
      style="padding: 20px;"
      placeholder="可描述你负责或参加过的项目，pc端，移动端，网页项目等"
      :value="data.birthday"
      @click="onBirthdayClick"
    />
    <view class="resume-footer">
      <van-button type="info" round size="large" @click="onClickNextBtn">保存</van-button>
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
