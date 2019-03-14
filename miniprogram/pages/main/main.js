const db = wx.cloud.database({});
const cont = db.collection('books');
Page({
  data: {
    book_list: []
  },
  onLoad: function (options) {
    // 创建一个变量来保存页面page示例中的this, 方便后续使用
    var _this = this;
    db.collection('books').get({
      success: res => {
        console.log(res.data[0]);

        this.setData({
          book_list: res.data
        })
      }
    })
  },
  viewitem: function (event) {
    console.log(event)
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../details/details?id='+id ,
    })
  }
})