Component({
    properties: {
        // 弹窗标题
        title: { 
            type: String,
            value: '标题'
        },
        // 弹窗内容
        content: {
            type: String,
            value: ''
        },
        showCancel: {
            type: Boolean,
            value: true
        },
        cancelText: {
            type: String,
            value: '取消'
        },
        // 弹窗确认按钮文字
        confirmText: {
            type: String,
            value: '确定'
        },
        confirmColor: {
            type: String,
            value: '#3CC51F'
        },
        isShow: {
            type: Boolean,
            value: false
        },
        isloading: { //按钮是否不可点击
            type: Boolean,
            value: false
        },
    },

    data: {
    },
    methods: {
        _cancelEvent() {
            this.setData({isShow:false});
            //this.triggerEvent("cancelEvent")
        },
        _confirmEvent() {
            if(this.data.isloading) return false;
            //触发成功回调
            //this.triggerEvent("confirmEvent");
            this.setData({isShow:false});
            this.triggerEvent('confirmEvent')
        }
    }
})
