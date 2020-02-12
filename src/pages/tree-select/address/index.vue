<template>
  <main class="main">
    <van-tree-select
      :items="items"
      :mainActiveIndex="mainActiveIndex"
      :activeId="activeId"
      :height="640"
      @click-nav="onClickNav"
      @clickNav="onClickNav"
      @click-item="onClickItem"
      @clickItem="onClickItem"
    />
  </main>
</template>

<script>
  import * as utils from '../../../utils'
  import address from '../../../../static/js/address'

  export default {
    data () {
      return {
        mainActiveIndex: 0,
        activeId: null,
        items: address.map((item, index) => ({
          id: `${index}_${(Math.random(32)).toString(36).split('.').pop()}`,
          text: item.value,
          children: item.children.map((item, index) => ({
            id: `${index}_${(Math.random(32)).toString(36).split('.').pop()}`,
            text: item.value
          }))
        }))
      }
    },

    methods: {
      onClickNav ({ target }) {
        this.mainActiveIndex = target.index
        this.city = target.text
      },

      onClickItem ({ target }) {
        this.activeId = target.id
        const searchString = utils.search({
          city: this.city,
          province: target.text
        })
        console.log('route To default' + searchString)
        mpvue.navigateTo({ url: `/pages/intention/main?${searchString}` })
      }
    },

    created () { }
  }
</script>

<style lang="less">
@import "./style.less";
</style>
