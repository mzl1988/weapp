Page({
    data: {
        title: '新增收货地址',
        latitude: '',
        longitude: '',
        address: {
            name: '',
            mobile: '',
            address: '',
            region: []
        }

    },
    onLoad: function(options) {
        var that = this;
        // 页面初始化 options为页面跳转所带来的参数
        that.setNavigationBarTitle(options.id);
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
    setNavigationBarTitle: function(id) {
        wx.setNavigationBarTitle({
            title: id ? '收货地址详细' : '新增收货地址'
        });
        this.setData({
            title: id ? '收货地址详细' : '新增收货地址'
        });
        if (!id) {
            this.getLocation();
        }
    },
    // 获取当前地区
    getLocation: function() {
        wx.getLocation({
            type: 'wgs84',
            success: (res) => {
                this.setData({
                    latitude: res.latitude,
                    longitude: res.longitude
                });
                this.getAddress();
            }
        })
    },
    getAddress: function() {
        wx.request({
            url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + this.data.latitude + ',' + this.data.longitude + '&key=AGCBZ-JIBHD-AG54U-PJP2M-HS5LV-LGFMT',
            data: {},
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                this.setData({
                    address: {
                        region: [res.data.result.address_component.province, res.data.result.address_component.city, res.data.result.address_component.district]
                    }
                });
            }
        })
    },
    // 表单输入
    bindNameInput: function(e) {
        this.setData({
            address: {
                name: e.detail.value
            }
        })
    },
    bindMobileInput: function(e) {
        this.setData({
            address: {
                mobile: e.detail.value
            }
        })
    },
    bindAddressInput: function(e) {
        this.setData({
            address: {
                address: e.detail.value
            }
        })
    },
    bindNameClear: function() {
        this.setData({
            address: {
                name: ''
            }
        })
    },
    bindMobileClear: function() {
        this.setData({
            address: {
                mobile: ''
            }
        })
    },
    bindAddressClear: function() {
        this.setData({
            address: {
                address: ''
            }
        })
    },
    bindRegionChange: function(e) {
        this.setData({
            address: {
                region: e.detail.value
            }
        })
    },
    remove: function() {
        // 删除
        wx.showModal({
            title: '确认删除该地址吗？',
            success: function(res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                    wx.navigateBack({
                        delta: 1
                    })
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
    save: function() {
        wx.navigateBack({
            delta: 1
        })
    }
})