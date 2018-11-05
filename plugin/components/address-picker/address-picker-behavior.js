let that;

const address_json = require('../../utils/AreaData_overseas');  

module.exports = Behavior({
    properties: {
        show: {
            type: Boolean,
            value: false,
            observer(newVal, oldVal) {
                return that.setData({
                    pickstate: newVal
                });
            }
        },
        value: {
            type: Array,
            value: [],
        }
    },

    created() {
        that = this;
    },
    attached() { //传值不存在
        return that._init();
    },

    data: {
        region: [],
        ispopup: false,
        isbgshow: false,

        pickstate: false,
        province: [],
        city: [],
        area: [],
        picktxt: '',
        pickval: [0, 0, 0],
    },

    methods: {
        _init() {
            //that.init_pickval = [0, 0, 0];
            return that.requsaddr((data) => {
                let pickval = that._initAreas(data);
                
                return that._addrssfn(pickval)
            });
        },
        _initAreas(data = [], seldata = that.data.value) {
            let pickval = [];

            if (data.length) data.map(function(el, ix) {
                if (el.name == seldata[0]) {

                    pickval.push(ix);

                    if (el.child.length) el.child.map(function(el1, ix1) {

                        if (el1.name == seldata[1]) {
                            pickval.push(ix1);

                            if (el1.child.length) el1.child.map(function(el2, ix2) {
                                if (el2.name == seldata[2]) pickval.push(ix2);
                            });
                        }

                    })
                }
            });

            if (pickval.length != 3) pickval = [0, 0, 0];

            return pickval;
        },

        //地址
        requsaddr(callback) {
            return callback && callback(address_json);
        },

        _addrssfn(pickval, addrss_data = address_json) {
            let province, city, area, len, citycur, areacur;

            len = addrss_data.length;
            province = addrss_data.map(function(el, ix) {
                if (ix == pickval[0]) {
                    citycur = ix;
                } else if (ix == (len - 1) && pickval[0] >= len) { //当滑动值大于总数
                    pickval[0] = len - 1;
                    citycur = len - 1;
                };
                return el.name;
            });

            len = addrss_data[citycur].child.length;
            city = addrss_data[citycur].child.map(function(el1, ix1) {
                if (ix1 == 0 && pickval[1] >= len) {
                    pickval[1] = 0;
                    areacur = 0;
                } else if (ix1 == pickval[1]) {
                    areacur = ix1;
                };
                return el1.name;
            });

            len = addrss_data[citycur].child[areacur].child.length;
            area = addrss_data[citycur].child[areacur].child.map(function(el2, ix2) {
                if (ix2 == 0 && pickval[2] >= len) pickval[2] = 0;
                return el2.name;
            });

            //console.log(province,city,area,pickval);
            return that.setData({
                province: province,
                city: city,
                area: area,
                pickval: pickval
            });
        },
        PickChange(event) {
            let pickval = event.detail.value;
            return that._addrssfn(pickval);
        },
    }
})
