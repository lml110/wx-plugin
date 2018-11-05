let myBehavior = require('level-fixebox-behavior');

Component({
    behaviors: [myBehavior],
    properties: {},
    data: {},
    created() {
    },
    attached() {
        //console.log(this.data);
    },
    ready(){
        /*let colorInfo = api.getColors();
        if(colorInfo) this.setData({
            styleStr1: colorInfo.styleStr1,
            styleStr2: colorInfo.styleStr2
        });*/
    },
    methods: { 
    }
});
