let myBehavior = require('date-choose-behavior');

const api       = require('../../api/data');

Component({
    behaviors: [myBehavior],
    properties: {
    },
    data: {
        styleStr2:'',
    },
    created() {
    },
    attached() {},
    ready(){
        let colorInfo = api.getColors();
        
        this.setData({
            styleStr2: colorInfo.styleStr2,
        });
    },
    methods: {
    }
});
