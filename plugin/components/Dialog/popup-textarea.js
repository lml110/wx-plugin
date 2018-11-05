Component({
    properties: {
        // 弹窗标题
        title: { 
            type: String,
            value: '取消原因'
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
        isShow: {
            type: Boolean,
            value: false
        },
    },

    data: {
        area_val: ''
    },
    methods: {
        _popupInput(event) {
            this.popup_cont = event.detail.value;
        },
        _cancelEvent() {
            this.setData({isShow:false,area_val:''});
            //this.triggerEvent("cancelEvent")
        },
        _confirmEvent() {
            //触发成功回调
            //this.triggerEvent("confirmEvent");
            this.setData({isShow:false,area_val:''});
            this.triggerEvent('confirmEvent', {
                content: this.popup_cont
            });
        }
    }
})
