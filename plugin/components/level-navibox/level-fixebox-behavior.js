const api       = require('../../api/data');
const utils     = require('../../utils/index');

module.exports = Behavior({
    behaviors: [],
    properties: {
        navcur: {
            type: Number,
            value: 0
        },
        navlist: {
            type: Array,
            value: []
        },
        numType: {
            type: String,
            value: '1'
        },
    },
    data: {
        //unitW: 
        nav_cur: 0,
        animaline: null,
        unitW: 0,

        theme_color: '#eb4d51',
        styleStr1: 'color: #eb4d51;',
        styleStr2: 'background-color: #eb4d51;color: #fff;',
    },
    created() {
        this.animaline = wx.createAnimation({
            duration: 300,
            timingFunction: 'ease',
        });
    },
    attached() {},
    ready() {
        api.getSystemInfo(info=>{
            let unitW = (info.windowWidth) ? utils._float(info.windowWidth*0.19,2) : 0;
            let colorInfo = api.getColors();
            let changed = {};
            
            //console.log(colorInfo);
            if(unitW) changed['unitW'] = unitW;
            if(colorInfo) {
                changed = Object.assign({
                    styleStr1: colorInfo.styleStr1,
                    styleStr2: colorInfo.styleStr2,
                    theme_color: colorInfo.theme_color
                },changed);
            };

            return this.animalineFn(this.data.navcur,changed);
        });
        
    },
    methods: {
        //列表点击
        navli_click(event) {
            let that = this,
                navlist = this.data.navlist,
                cur = parseInt(event.currentTarget.dataset.index, 10),
                curlist = navlist[cur] || {};

            if (cur == this.data.nav_cur) return false;

            this.animalineFn(cur);
            this.triggerEvent('clickEvent', {
                cur: cur,
                item: curlist
            })
        },

        animalineFn(cur,changed={}) {
            let latex = (100*cur)+'%';

            this.animaline.translateX(latex).step();

            changed = Object.assign({
                nav_cur: cur,
                animaline: this.animaline.export()
            },changed);

            return this.setData(changed);
        },
    }
});
