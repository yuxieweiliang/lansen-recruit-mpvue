<template>
  <div>
    <van-tabs animated swipeable :active="active" @change="onChange">
      <van-tab title="推荐">内容 1</van-tab>
      <van-tab title="已投递">再等等，还没收到反馈哦~</van-tab>
      <van-tab title="智能代投">内容 3</van-tab>
      <van-tab title="被查看">内容 4</van-tab>
      <van-tab title="通过初筛">内容 2</van-tab>
      <van-tab title="邀请面试">内容 3</van-tab>
      <van-tab title="不合适">内容 4</van-tab>
    </van-tabs>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        active: 1
      }
    },

    methods: {
      // onChange(event) {
      //   wx.showToast({
      //     title: `切换到标签 ${event.mp.detail.name}`,
      //     icon: 'none'
      //   })
      // }
    },

    created () {}
  }
</script>

<style>

</style>
