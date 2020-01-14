// pages/details/details.js
Page({

  /**
   * Page initial data
   */
  data: {
    title: '',
    photo: {},
    comments: [],
    tags: [],
    id: 0,
    height: 0,
    pages: [],
    currentType: wx.getStorageSync('currentType'),
    types: wx.getStorageSync('types') ? wx.getStorageSync('types') : app.globalData.types
  },
  showPhotoInfo: function (e) {
    this.setData({
      hideInfo: false
    })
  },
  closeInfo: function (e) {
    this.setData({
      hideInfo: true
    })
  },
  
  fetchDetail: function (id) {
     
  },
  
    /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (e) {
    console.log('load photo detail');
    console.log(e.query)
    //加载第一个类型的列表
    // if (!this.data.currentType) {
    //   let that = this
    //   this.data.types.every(function (item) {
    //     if (item.is_show) {
    //       wx.setStorageSync('currentType', item.value)
    //       that.setData({
    //         currentType: item.value
    //       })
    //       return false
    //     } else {
    //       return true
    //     }
    //   })
    // }
    // this.getList(this.data.currentType)
    // this.fetchDetail(options.id);
  }
,

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})