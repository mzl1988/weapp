Page({
    data: {
        shippingType: 'self',
        dates: ['2017-07-07', '2017-07-06', '2017-07-05', '2017-07-04'],
        dateIndex: 0,
        times: ['10:30 ~ 11:00', '11:00 ~ 11:30', '11:30 ~ 12:00', '12:00 ~ 12:30'],
        timeIndex: 0
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
    radioChange: function(e) {
        console.log(e.detail.value);
        this.setData({
            shippingType: e.detail.value
        });
    },
    bindPickerChangeDate: function(e) {
        console.log(e);
        this.setData({
            dateIndex: e.detail.value
        })
    },
    bindPickerChangeTime: function(e) {
        console.log(e);
        this.setData({
            timeIndex: e.detail.value
        })
    }
})