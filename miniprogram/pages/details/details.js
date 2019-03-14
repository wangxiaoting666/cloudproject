// pages/details/details.js
const db = wx.cloud.database({});
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function (options) {
    //  console.log(options)
    db.collection('books').doc(options.id).get({
      success: res => {
        console.log(res.data)
        this.setData({
          book: res.data
        })
      }
    })
  },
})