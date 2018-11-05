const api       = require('../../api/data');

module.exports = Behavior({
    properties: {
        btntxt: { //按钮标题
            type: String,
            value: '查询'
        },
        startDate: { //开始时间
            type: String,
            value: ''
        },
        endDate: { //结束时间
            type: String,
            value: ''
        },
        isDefault: { //是否无默认时间
            type: Boolean,
            value: false
        },
        isEnds: { //是否限制时间
            type: Boolean,
            value: true
        },
        isbgColor: {  //是否显示白色
            type: Boolean,
            value: true
        },
    },

    created() {

    },
    attached() {
        //console.log(this.data);
        if (this.data.isEnds) return this.setData({
            ends: api.endDate, //有效日期范围的结束
        });
    },

    data: {
        //startDate: '',
        //endDate: '',
        ends: '',
    },

    methods: {
        startDateChange(event) {
            return this.setData({
                startDate: event.detail.value
            });
        },
        endDateChange(event) {
            return this.setData({
                endDate: event.detail.value
            });
        },

        query_click() {
            this.triggerEvent('clickEvent', {
                startDate: this.data.startDate,
                endDate: this.data.endDate
            });
        }
    }
})
