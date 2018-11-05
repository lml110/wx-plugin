const api       = require('../../api/data');

module.exports = Behavior({
    properties: {
    },

    created() {
    },
    attached() { //传值不存在
        this.State = 0;
    },

    data: {
        startDate: api.startDate, 
        endDate: api.endDate,

        navlist: [{
            txt: '收入相关',
            state: 0
        }, {
            txt: '支出相关',
            state: 1
        }]
    },

    methods: {

        //查询
        query_click(event) {
            this.endDate = event.detail.endDate;
            this.startDate = event.detail.startDate;
            
            let resdata = {
                StartTime: this.startDate,
                EndTime: this.endDate,
                State: this.State
            };

            return this.triggerEvent('queryEvent', resdata);
        },

        //菜单切换
        navi_click(event) {
            //console.log('菜单切换',event.detail);
            let curlist = event.detail.item;
            let resdata = {
                StartTime: this.startDate || this.data.startDate,
                EndTime: this.endDate || this.data.endDate,
                State: curlist.state || 0
            };
            let changed = {};

            changed['startDate'] = resdata.StartTime;
            changed['endDate'] = resdata.EndTime;

            this.State = curlist.state || 0;
            this.setData(changed);

            return this.triggerEvent('tabEvent', resdata);
        }
    }
})
