<template>
  <van-row class="ls-radio-group-row">
    <van-col span="12">
      <div class="ls-title">{{ title }}</div>
    </van-col>
    <van-col span="12">
      <radio-group class="ls-radio-group" @change="(event) => $emit('change', event)">
        <radio
          class="ls-radio"
          v-for="(item, index) in data"
          :key="index"
          :checked="defaultValue ? defaultValue === item.value : index === 0"
          :value="item.value"
        >
          {{ item.label }}
        </radio>
      </radio-group>
    </van-col>
  </van-row>
</template>

<script>
  export default {
    name: 'ls-radio-group',
    props: {
      title: {
        type: String,
        default: '标题'
      },
      data: {
        type: Array,
        default: [{value: '0', label: '否'}, {value: '1', label: '是'}]
      },
      defaultValue: {
        type: String,
        default: '0'
      }
    },
    mounted () {
      console.log(this)
    }
  }
</script>

<style lang="less">
  .ls-radio-group-row {
    background-color: #fff;
    width: 100vw;
    font-size: 14px;
  // border: 1px solid yellow;
  .ls-radio-group {
    display: flex;
    padding-right: 40rpx;
    height: 1rem;
    line-height: 1rem;
    justify-content: flex-end;
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;
  .ls-radio {
    padding-left: 40rpx;
  }
  }
  .ls-title {
    padding-left: 40rpx;
    height: 1rem;
    line-height: 1rem;
    background-color: #fff;
  }
  }
</style>
