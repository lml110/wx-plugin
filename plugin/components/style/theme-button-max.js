const api       = require('../../api/data');

Component({
    properties: {
        title: { //按钮标题
            type: String,
            value: '确认'
        },
        isbg: { //按钮背景
            type: Boolean,
            value: true
        },
    },
    data: {
        theme_color: '#eb4d51',
        styleStr1: 'color: #eb4d51;',
        styleStr2: 'background-color: #eb4d51;color: #fff;',
    },
    created() {
    },
    attached() {
    },
    ready(){
        let colorInfo = api.getColors();

        this.setData({
            styleStr1: colorInfo.styleStr1,
            styleStr2: colorInfo.styleStr2,
            theme_color: colorInfo.theme_color
        });
    },
    methods: {
        query_click(){
            return this.triggerEvent('clickEvent');
        }
    }
});
