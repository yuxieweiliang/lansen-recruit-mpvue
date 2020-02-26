<template>
  <main class="main">
    <form class="user-from">
      <van-cell-group title="最新工作/实习经历">

        <van-field
          required
          label="单位名称"
          placeholder="请输入"
          input-align="right"
          :value="data.userName"
          :error="error.userName"
          @input="({mp}) => { data.userName = mp.detail }"
          @change="onUsernameChange"
          @blur="onUsernameBlur"
        />

        <van-field
          required
          label="部门名称"
          placeholder="请输入"
          input-align="right"
          :value="data.userName"
          :error="error.userName"
          @input="({mp}) => { data.userName = mp.detail }"
          @change="onUsernameChange"
          @blur="onUsernameBlur"
        />

        <van-field
          required
          label="职位名称"
          placeholder="请输入"
          input-align="right"
          :value="data.userName"
          :error="error.userName"
          @input="({mp}) => { data.userName = mp.detail }"
          @change="onUsernameChange"
          @blur="onUsernameBlur"
        />

        <van-cell
          title="入职时间"
          is-link
          :value="data.birthday"
          @click="onBirthdayClick"
        />

        <van-cell
          title="离职时间"
          is-link
          :value="data.birthday"
          @click="onBirthdayClick"
        />

        <van-cell
          title="工作描述"
          is-link
          :value="data.birthday"
          @click="onBirthdayClick"
        />

        <van-cell
          title="月薪"
          is-link
          :value="data.visitorExperienceList ? '请选择' : '请添加'"
          link-type="navigateTo"
          url="/pages/dashboard/index"
        />

        <LsRadioGroup
          title="是否公开月薪"
          :data="dataSource.gander"
          :defaultValue="data.gander"
          @change="onGanderChange"
        />

      </van-cell-group>

    </form>

    <view class="resume-footer">
      <van-button type="info" round size="large" @click="onClickNav">完成创建</van-button>
    </view>
  </main>
</template>

<script>
  import LsRadioGroup from '../../../components/LsRadioGroup'

  export default {
    name: 'resume-new-experience',
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
      onClickNav ({ target }) {
        mpvue.switchTab({ url: `/pages/resume/main` })
      },

      onClickItem ({ target }) { }
    },

    created () { }
  }
</script>
