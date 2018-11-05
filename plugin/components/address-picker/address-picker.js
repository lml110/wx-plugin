let myBehavior = require('address-picker-behavior');

Component({
    behaviors: [myBehavior],
    properties: {
    },
    data: {},
    created() {
    },
    attached() {
        //console.log(this.data);
    },
    methods: {
        //取消
        pick_hide() {
            return this.triggerEvent('cancelEvent')
        },

        picker_confirm() {
            let pickval, datas;

            pickval = this.data.pickval;
            datas = this.data;
            //this.init_pickval = pickval;

            let region = [datas.province[pickval[0]], datas.city[pickval[1]], datas.area[pickval[2]]];

            return this.triggerEvent('confirmEvent', {
                region: region,
                pickstate: false,
            });
        },

        address_show() {
            return this.setData({
                pickstate: true
            });
        }
    }
})
