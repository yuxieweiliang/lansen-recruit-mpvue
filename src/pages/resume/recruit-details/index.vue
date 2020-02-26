<template>
  <div class="container">
    <div class="title-logo">
      <image class="logo-image" src="/static/images/logo.gif" mode="aspectFit" />
    </div>
    <div class="enterprise-content">
      <p>
        开启小程序进入前后台时均接收位置消息，需引导用户开启授权。授权以后，小程序在运行中或进入后台均可接受位置消息变化。
      </p>
      <p>
        开启小程序进入前后台时均接收位置消息，需引导用户开启授权。授权以后，小程序在运行中或进入后台均可接受位置消息变化。
      </p>
      <p>
        开启小程序进入前后台时均接收位置消息，需引导用户开启授权。授权以后，小程序在运行中或进入后台均可接受位置消息变化。
      </p>
      <p>
        开启小程序进入前后台时均接收位置消息，需引导用户开启授权。授权以后，小程序在运行中或进入后台均可接受位置消息变化。
      </p>
    </div>

    <address class="enterprise-address">
      公司地址：广东省深圳市龙岗区龙岗街道南联社区爱南路268号3号楼东座
    </address>
    <map
      id="map"
      longitude="113.324520"
      latitude="23.099994"
      scale="14"
      :markers="markers"
      @callouttap="callOutTap"
      show-location
      show-compass
      style="width: 100%; height: 300px;"
    />
  </div>
</template>

<script>
  // import actions from '../../../actions'
  import img from '../../../../static/images/user.png'
  export default {
    data () {
      return {
        routeInfo: {},
        markers: [{
          iconPath: img,
          id: 0,
          latitude: 23.099994,
          longitude: 113.324520,
          width: 20,
          height: 20,
          callout: {
            color: '#ccc',
            fontSize: 16,
            padding: 10,
            borderRadius: 4,
            bgColor: '#000',
            content: '朗生 >',
            display: 'ALWAYS'
          }
        }]
      }
    },

    methods: {
      /**
       * 点击地图上的气泡时触发
       */
      callOutTap (data) {
        // console.log(data)
        this.navigateToDetails()
      },
      regionchange: () => {},
      getAuth (auth, cd) {
        auth = `scope.${auth}`
        wx.getSetting({
          success (res) {
            if (!res.authSetting[auth]) {
              // console.log('getSetting: ', auth)
              // console.log('getSetting: ', res)
              wx.authorize({ scope: auth, success: cd })
            } else {
              cd()
            }
          }
        })
      },

      onGotUserInfo (data) {
        // console.log('onGotUserInfo: ', data)
      },
      navigateToDetails () {
        this.getAuth('record', function () {
          wx.getLocation({
            type: 'gcj02',
            success (res) {
              const { longitude, latitude } = res
              // console.log('navigateToDetails: ', res)
              wx.openLocation({
                longitude,
                latitude,
                name: '朗生',
                address: '广东省深圳市龙岗区龙岗街道南联社区爱南路268号3号楼东座',
                scale: 18
              })
            }
          })
        })
      },
      getUserInfo () {
        this.getAuth('userInfo', function () {
          wx.getUserInfo({
            success: function (res) {
              // console.log('res: ', res)
              // console.log(res.userInfo)
            }
          })
        })
      }
    },

    created () { }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .title-logo {
    width: 100vw;
    height: 120rpx;
    .logo-image {
      height: 120rpx;
    }
  }
  .enterprise-content {
    color: #666;
    font-size: 28rpx;
    padding: 20rpx 30rpx;
    p {
      margin-bottom: 30rpx;
      text-indent: 50rpx;
      letter-spacing: 4rpx;
    }
  }
  .enterprise-address {
    font-size: 28rpx;
    padding: 0 20rpx;
    font-weight: bold;
  }
</style>
