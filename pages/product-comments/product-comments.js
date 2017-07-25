// pages/classify/classify.js
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
                'menu': '好评'
            },
            {
                'menuId': 1,
                'menu': '中评'
            },
            {
                'menuId': 1,
                'menu': '差评'
            },
            {
                'menuId': 1,
                'menu': '晒单'
            }
        ],
        comments: [{
                username: '小鳄鱼',
                level: '钻石会员',
                comment: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                images: [],
                date: '2017-06-08'
            },
            {
                username: '小鲤鱼',
                level: '普通会员',
                comment: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                images: [
                    'http://192.168.10.105:3000/images/ad1.jpg',
                    'http://192.168.10.105:3000/images/ad2.jpg',
                    'http://192.168.10.105:3000/images/ad3.jpg',
                    'http://192.168.10.105:3000/images/ad2.jpg'
                ],
                date: '2017-06-07'
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
    commentPreviewImage: function(e) {
        // 预览图片, 只支持 http 或者 https 协议的网络图片地址。
        // console.log(e);
        wx.previewImage({
            current: e.currentTarget.dataset.current, // 当前显示图片的http链接, 
            urls: e.currentTarget.dataset.urls // 需要预览的图片http链接列表
        })
    }
})