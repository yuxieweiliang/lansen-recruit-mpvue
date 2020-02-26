<template>
  <main class="main">
    <view class="user-theme">
      <view class="user-theme-left">
        <open-data class="user-avatar" type="userAvatarUrl"/>
      </view>
      <view class="user-theme-middle">
        <open-data class="user-name" type="userNickName"/>
        <view class="user-info">工作三年 | 长安区 | 未培训 | 中级</view>
      </view>
      <view class="user-theme-right">
        <van-icon name="edit" @click="onEditClick"/>
      </view>
    </view>
    <view>
      <van-cell title="163854752" icon="location-o" :border="false" />
      <van-cell title="kfuxkeng@123.com" icon="location-o" :border="false" />
    </view>

    <view style="padding: 20px 20px 0 20px; height: 60px;margin-top: 20px;background: #fff;">
      <view style="font-size: 12px;line-height: 24px;color: dodgerblue">当前进度</view>
      <van-progress percentage="50" stroke-width="8"/>
    </view>

    <van-cell-group custom-class="cell-group-custom">
      <view style="padding: 20px; background: #fff;margin-top: 20px;">
        <van-row>
          <van-col span="12">求职意向</van-col>
          <van-col span="12" style="text-align: right;"><van-icon name="edit"/></van-col>
        </van-row>
      </view>
      <view style="padding: 0 20px; background: #fff;">
        <view style="display: flex; padding-bottom: 10px;">
          <view style="width: 30px;"><van-icon name="edit" style="font-size: 20px;"/></view>
          <view style="flex: 1;font-size: 14px;">目前处于离职状态，随时可上岗</view>
        </view>
        <view style="display: flex; padding-bottom: 10px;">
          <view style="width: 30px;"><van-icon name="edit" style="font-size: 20px;"/></view>
          <view style="flex: 1;font-size: 14px;">java工程师</view>
        </view>
        <view style="display: flex; padding-bottom: 10px;">
          <view style="width: 30px;"><van-icon name="location-o" style="font-size: 20px;"/></view>
          <view style="flex: 1;font-size: 14px;">陕西</view>
        </view>
        <view style="display: flex; padding-bottom: 10px;">
          <view style="width: 30px;"><van-icon name="location-o" style="font-size: 20px;"/></view>
          <view style="flex: 1;font-size: 14px;">面议（期望）</view>
        </view>
        <view style="display: flex; padding-bottom: 20px;">
          <view style="width: 30px;"><van-icon name="location-o" style="font-size: 20px;"/></view>
          <view style="flex: 1;font-size: 14px;">7千 - 8千（目前）</view>
        </view>
      </view>
    </van-cell-group>

    <van-cell-group custom-class="cell-group-custom">
      <view style="padding: 20px; background: #fff;margin-top: 20px;">
        <van-row>
          <van-col span="12">工作/实习经历</van-col>
          <van-col span="12" style="text-align: right;display: flex; justify-content: flex-end; align-items: center;">
            <van-icon name="add-o" size="24px" />
            <view style="position: relative; top: -6px; display: inline; margin-left: 5px;">添加</view>
          </van-col>
        </van-row>
      </view>
      <view style="padding: 0 20px 20px 20px; background: #fff;">
        <van-row>
          <van-col span="12">前端 | 朗生网络技术</van-col>
          <van-col span="12" style="text-align: right;"><van-icon name="edit"/></van-col>
        </van-row>
        <view style="font-size: 14px; color: #999; padding: 6px 0;">2018-08 至 2020-02 6千/月(保密)</view>
        <view style="font-size: 14px; color: #555;">软件研发工作</view>
      </view>
      <view style="padding: 0 20px 20px 20px; background: #fff;">
        <van-row>
          <van-col span="12">前端 | 朗生网络技术</van-col>
          <van-col span="12" style="text-align: right;"><van-icon name="edit"/></van-col>
        </van-row>
        <view style="font-size: 14px; color: #999; padding: 6px 0;">2018-08 至 2020-02 6千/月(保密)</view>
        <view style="font-size: 14px; color: #555;">软件研发工作</view>
      </view>
    </van-cell-group>

    <van-cell-group custom-class="cell-group-custom">
      <view style="padding: 20px; background: #fff;margin-top: 20px;">
        <van-row>
          <van-col span="12">教育经历</van-col>
          <van-col span="12" style="text-align: right;display: flex; justify-content: flex-end; align-items: center;">
            <van-icon name="add-o" size="24px" />
            <view style="position: relative; top: -6px; display: inline; margin-left: 5px;">添加</view>
          </van-col>
        </van-row>
      </view>
      <view style="padding: 0 20px 20px 20px; background: #fff;">
        <van-row>
          <van-col span="12">西安欧亚学院</van-col>
          <van-col span="12" style="text-align: right;"><van-icon name="edit"/></van-col>
        </van-row>
        <view style="font-size: 14px; color: #999; padding: 6px 0;">2018-08 至 2020-02</view>
        <view style="font-size: 14px; color: #555;">本科 物流管理</view>
      </view>
    </van-cell-group>

    <van-cell-group custom-class="cell-group-custom">
      <view style="padding: 20px; background: #fff;margin-top: 20px;">
        <van-row>
          <van-col span="12">自我评价</van-col>
          <van-col span="12" style="text-align: right;display: flex; justify-content: flex-end; align-items: center;">
            <van-icon name="add-o" size="24px" />
            <view style="position: relative; top: -6px; display: inline; margin-left: 5px;">添加</view>
          </van-col>
        </van-row>
      </view>
    </van-cell-group>

    <van-cell-group custom-class="cell-group-custom">
      <view style="padding: 20px; background: #fff;margin-top: 20px;">
        <van-row>
          <van-col span="12">项目经历</van-col>
          <van-col span="12" style="text-align: right;display: flex; justify-content: flex-end; align-items: center;">
            <van-icon name="add-o" size="24px" />
            <view style="position: relative; top: -6px; display: inline; margin-left: 5px;">添加</view>
          </van-col>
        </van-row>
      </view>
    </van-cell-group>

    <van-cell-group custom-class="cell-group-custom">
      <view style="padding: 20px; background: #fff;margin-top: 20px;">
        <van-row>
          <van-col span="12">专业技能</van-col>
          <van-col span="12" style="text-align: right;display: flex; justify-content: flex-end; align-items: center;">
            <van-icon name="add-o" size="24px" />
            <view style="position: relative; top: -6px; display: inline; margin-left: 5px;">添加</view>
          </van-col>
        </van-row>
      </view>
    </van-cell-group>

    <view style="padding: 10px 0; background: #fff;margin-top: 20px;">
      <van-cell title="简历公开状态" value="对所有单位公开" is-link />
    </view>


    <view class="resume-preview">
      <van-button
        class="resume-preview-btn"
        type="info"
        round
        @click="onClickNextBtn"
      >
        简历预览
      </van-button>
    </view>
  </main>
</template>

<script>
  export default {
    name: 'new',
    data () {
      return {
        dataSource: { },
        data: { },
        error: { }
      }
    },

    methods: {
      onEditClick ({ target }) {
        console.log('-----information--')
        mpvue.navigateTo({ url: `pages/resume-new/main` })
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
