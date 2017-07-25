// pages/orders/orders.js
Page({
    data: {
        activeIndex: 0,
        scrollLeft: 0,
        menus: [{
                'menuId': 1,
                'menu': '全部'
            },
            {
                'menuId': 1,
                'menu': '待付款'
            },
            {
                'menuId': 1,
                'menu': '待发货'
            },
            {
                'menuId': 1,
                'menu': '待收货'
            },
            {
                'menuId': 1,
                'menu': '待评价'
            }
        ]
    },
    onLoad: function(options) {
        // 页面初始化 options为页面跳转所带来的参数
    },
    onReady: function() {
        // 页面渲染完成
    },
    onShow: function() {
        // 页面显示
        var span = wx.getSystemInfoSync().windowWidth / this.data.menus.length + 'px';
        this.setData({
            itemWidth: this.data.menus.length <= 5 ? span : '160rpx'
        });
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
    },
    tabChange: function(e) {
        var index = e.currentTarget.dataset.index;
        this.setData({
            activeIndex: index
        });
    },
    swiperChange: function(e) {
        if (this.data.menus.length <= 4) {
            this.setData({
                scrollLeft: 0
            });
        } else {
            this.setData({
                scrollLeft: 240 * (e.detail.current + 1 - 4)
            });
        }
        this.setData({
            activeIndex: e.detail.current
        });
    },
    bindDownLoad: function(e) {
        console.log(e);
    },
    makePhoneCall: function() {
        wx.makePhoneCall({
            phoneNumber: '400-000-0000'
        })
    },
    toOrderDetails: function(e) {
        wx.navigateTo({
            url: "/pages/order-details/order-details?id=" + e.currentTarget.dataset.id
        });
    },
    toEvaluate: function(e) {
        wx.navigateTo({
            url: "/pages/evaluate/evaluate?id=" + e.currentTarget.dataset.id
        });
    }
})