//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    let types = wx.getStorageSync("types");
    if (!types) {
      wx.setStorageSync("types", this.globalData.types);
    }
    // 登录
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    api: {
      listBaseUrl: "",
      albumBaseurl: "",
    },
    currentType: '',
    types: [
      {
        title: "北欧风",
        value: "nordic",
        is_show: true
      },
      {
        title: "奢华大气",
        value: "baroque",
        is_show: true
      },
      {
        title: "小清新",
        value: "partysu",
        is_show: true
      },
      {
        title: "儿童",
        value: "childish",
        is_show: true
      },
      {
        title: "配件",
        value: "accessaries",
        is_show: true
      },
    ]
  }
})