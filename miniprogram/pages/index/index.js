let app = getApp();
let that;

Page({
	data: {
		navlist: [{
            txt: '全部',
            state: '-1'
        }, {
            txt: '下单',
            state: '1'
        }, {
            txt: '汇总',
            state: '2'
        }, {
            txt: '充值',
            state: '0'
        }, {
            txt: '扣款',
            state: '5'
        }, {
            txt: '取消订单',
            state: '3'
        }, {
            txt: '取消汇总',
            state: '4'
        }],
        navcur: 2,
        navlist1: [{
            txt: '全部',
            state: '-1'
        }, {
            txt: '下单',
            state: '1'
        }, {
            txt: '汇总',
            state: '2'
        }],

        //地址
        region:[],
        region_txt: '',
        init_region: [], //初始地址
        pickstate: false,
        addr_show: false,

        startDate: app.startDate,
        endDate: app.endDate,

        isdialog: false,
        isPopup: false,
        isPopup1: false,

        treeList:[{"MemberId":11807,"Name":"测试-y13","RoleName":"省代","LowCount":1,"children":[{"MemberId":11805,"Name":"测试-y11","RoleName":"市代","LowCount":0}]},{"MemberId":11823,"Name":"测试周诗17","RoleName":"市代","LowCount":0},{"MemberId":11813,"Name":"测试周诗12","RoleName":"市代","LowCount":0},{"MemberId":11812,"Name":"测试周诗11","RoleName":"市代","LowCount":0},{"MemberId":11811,"Name":"测试周诗10","RoleName":"市代","LowCount":0}],
        
	},
    onLoad() {
        that = this;

        //console.log(app._float(2.2324*0.322122,2));
    	app._init((info)=>{});
    },
    navi_click(event){
    	//console.log(event);
    },

    //地址
    address_show() {
        return that.setData({
            pickstate: true
        });
    },
    pick_cancel() {
        return that.setData({
            pickstate: false
        });
    },
    //确认按钮
    picker_confirm(event) {
        let region = event.detail.region;
        let pickstate = event.detail.pickstate;

        return that.setData({
            pickstate,
            region,
            region_txt: region.join('')
        });
    },

    apply_tips(){
        that.setData({
            isdialog: true
        });
    },
    apply_cancel(){
        that.setData({
            isPopup1: true
        });
    }
})
