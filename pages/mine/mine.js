// pages/mine/mine.js
var app = getApp()
Page({
    data: {
        actionSheetHidden: true,
        userInfo: {}
    },
    onLoad: function(options) {
        console.log('myload')
            // 页面初始化 options为页面跳转所带来的参数
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            console.log(userInfo)
                //更新数据
            that.setData({
                userInfo: userInfo
            })
        });
    },
    onReady: function() {
        // 页面渲染完成
    },
    onShow: function() {
        // 页面显示
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
    },
    onPullDownRefresh: function() {
        wx.showToast({
            title: 'loading...',
            icon: 'loading'
        })
        console.log('onPullDownRefresh', new Date())
    },
    makePhoneCall: function() {
        wx.makePhoneCall({
            phoneNumber: '400-000-0000'
        })
    }
})