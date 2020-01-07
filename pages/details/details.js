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
    loading: true,
    hideInfo: true,
    hideCamera: true,
    hideLens: true,
    hideAperture: true,
    hideISO: true,
    hideRate: true,
    hideVote: true,
    hideView: true,
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
  loadUser: function (event) {
    var id = event.currentTarget.id,
      url = '../user/user?id=' + id;
    wx.navigateTo({
      url: url
    })
  },
  fetchDetail: function (id) {
    var that = this;
    console.log(id);
    wx.request({
      url: Api.getPhoto(id),
      data: {
        image_size: 4,
        tags: '1',
        // comments: 1,
        consumer_key: Api.getConsumerKey()
      },
      success: function (res) {
        var photo = res.data.photo;
        // var pages = getXML(res.data.photo.description);
        that.setData({
          photo: photo,
          height: photo.height * 750 / photo.width,
          pages: util.getXML(photo.description),
          hideCamera: Api.isNone(photo.camera),
          hideLens: Api.isNone(photo.lens),
          hideAperture: Api.isNone(photo.aperture),
          hideISO: Api.isNone(photo.iso),
          hideRate: Api.isNone(photo.rating),
          hideVote: Api.isNone(photo.votes_count),
          hideView: Api.isNone(photo.times_viewed),
          tags: photo.tags
        });
      }
    });
    that.fetchReplies(id);
  },
  fetchReplies: function (id) {
    var that = this;
    wx.request({
      url: Api.getComments(id),
      data: {
        consumer_key: Api.getConsumerKey()
      },
      success: function (res) {
        that.setData({
          loading: false,
          comments: res.data.comments
        })
      }
    })
  },
    /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log('load photo detail');
    console.log(option.query)
    //加载第一个类型的列表
    if (!this.data.currentType) {
      let that = this
      this.data.types.every(function (item) {
        if (item.is_show) {
          wx.setStorageSync('currentType', item.value)
          that.setData({
            currentType: item.value
          })
          return false
        } else {
          return true
        }
      })
    }
    this.getList(this.data.currentType)
    this.fetchDetail(options.id);
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