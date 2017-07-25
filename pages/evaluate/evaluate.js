var _ = require('../../lib/lodash/we-lodash');
// var moment = require('../../lib/moment/we-moment-with-locales');

Page({
    data: {
        products: [{
                id: 1,
                name: '牛轧糖买三盒立减15元',
                price: 42.8,
                image: '/images/goods1.jpg',
                star: 5,
                content: '',
                anonymous: true,
                imageList: [],
                open: false
            },
            {
                id: 2,
                name: '牛轧糖买',
                price: 16.8,
                image: '/images/goods1.jpg',
                star: 3,
                content: '',
                anonymous: true,
                imageList: [],
                open: false
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
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
    },
    open: function(e) {
        var param = {};
        var str = 'products[' + e.target.dataset.index + '].open';
        param[str] = !this.data.products[e.target.dataset.index].open;
        this.setData(param)
    },
    setStar: function(e) {
        var param = {};
        var str = 'products[' + e.target.dataset.index + '].star';
        param[str] = e.target.dataset.star;
        this.setData(param)
    },
    bindInputChange: function(e) {
        var param = {};
        var str = 'products[' + e.target.dataset.index + '].content';
        param[str] = e.detail.value;
        this.setData(param);
    },
    setAnonymous: function(e) {
        var param = {};
        var str = 'products[' + e.currentTarget.dataset.index + '].anonymous';
        param[str] = !this.data.products[e.currentTarget.dataset.index].anonymous;
        this.setData(param);
    },
    chooseImage: function(e) {
        var param = {};
        var str = 'products[' + e.target.dataset.index + '].imageList';
        wx.chooseImage({
            sourceType: ['camera', 'album'],
            sizeType: ['compressed'],
            count: 3,
            success: (res) => {
                param[str] = res.tempFilePaths;
                this.setData(param);
                // 上传多图http://www.cnblogs.com/xjwy/p/6956120.html
            }
        })
    },
    previewImage: function(e) {
        wx.previewImage({
            current: e.target.dataset.src,
            urls: e.target.dataset.urls
        })
    },
    minusImg: function(e) {
        var product = this.data.products[e.target.dataset.productindex];
        product.imageList.splice(e.target.dataset.imgindex, 1);
        var param = {};
        var str = 'products[' + e.target.dataset.productindex + '].imageList';
        param[str] = product.imageList;
        this.setData(param);
    }


})