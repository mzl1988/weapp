Page({
    data: {
        title: '收货地址'
    },
    onLoad: function(options) {
        console.log(options);
        var that = this;
        // 页面初始化 options为页面跳转所带来的参数
        that.setNavigationBarTitle(options.title);
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
    setNavigationBarTitle: function(title) {
        wx.setNavigationBarTitle({
            title: title
        });
        this.setData({
            title: title
        });
    },
    remove: function() {
        // 删除
        wx.showModal({
            title: '确认删除该地址吗？',
            success: function(res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
    toAddressDetails: function(e) {
        wx.navigateTo({
            url: "/pages/shipping-address-details/shipping-address-details?id=" + e.currentTarget.dataset.id
        });
    }
})