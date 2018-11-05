module.exports = Behavior({
    properties: {
        dataList: {
            type: Object,
            value: {},
            observer(newVal, oldVal) {
                /*that.setData({
                    dataList: newVal
                });*/
            }
        },
        key: {
            type: String,
            value: 'LowCount',
        }
    },

    created() {
    },
    attached() {},
    ready(){
        /*that.setData({
            dataList: that.data.data
        });*/
    },
    data: {
        //dataList: {}
    },

    methods: {
    }
})
