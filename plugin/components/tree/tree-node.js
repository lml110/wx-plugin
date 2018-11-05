let myBehavior = require('tree-node-behavior');

Component({
    behaviors: [myBehavior],
    properties: {},

    created() {
    },
    attached() {},
    data: {
        
    },

    methods: {
        //展示按钮
        open_click(event) {
            let items = event.currentTarget.dataset.item || event.detail.item;
            if (!items) return false;

            //console.log('open_click',items);
            this.triggerEvent('clickEvent', {
                item: items
            });
        },
        //弹框按钮
        popup_click(event) {
            let memberid = event.currentTarget.dataset.memberid || event.detail.memberid;
            if (!memberid) return false;

            //console.log('open_click',event.currentTarget.dataset);
            this.triggerEvent('popupEvent', {
                memberid: memberid
            })
        },
    }
})
