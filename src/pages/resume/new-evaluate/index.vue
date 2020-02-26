<template>
  <main class="main">
    <textarea
      style="padding: 20px;"
      placeholder="可逐条填写您的核心竞争力，培训经历，获奖项等"
      :value="data.birthday"
      @click="onBirthdayClick"
    />
    <view style="padding:20px;">
      <ul style="background: #fff; box-shadow: 0 0 10px #ccc; padding: 10px;">
        <li>1. 工作认真负责，不推卸责任;</li>
        <li>2. 能承担公司高强度工作的压力;</li>
        <li>3. 具有团队精神，能和同事保持良好沟通;</li>
        <li>4. 善于学习，勤奋刻苦，适应性强，能够在短时间内融入一个新的环境。</li>
      </ul>
    </view>
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
