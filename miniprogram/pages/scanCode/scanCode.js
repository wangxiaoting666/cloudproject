// pages/scanCode/scanCode.js
Page({
  data: {
  },

  scanCode: function (event) {
    console.log(1)
    // 允许从相机和相册扫码
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['barCode'],
      success: res => {
        console.log(res.result)

        //
        wx.cloud.callFunction({
          // 要调用的云函数名称
          name: 'bookinfo',
          // 传递给云函数的参数
          data: {
            isbn: res.result
          },
          success: res => {
            //  console.log(res)
            //进一步的处理
            var bookString = res.result;
            console.log(JSON.parse(bookString))


            //云数据库初始化
            const db = wx.cloud.database({});
            const book = db.collection('books')

            db.collection('books').add({
              // data 字段表示需新增的 JSON 数据
              data: JSON.parse(bookString)

            }).then(res => {
              console.log(res)
            }).catch(err => {
              console.log(err)
            })
          },
          fail: err => {
            console.error(res)
          }
        })
      },
      fail: err => {
        console.log(err);
      }
    })
  }

})