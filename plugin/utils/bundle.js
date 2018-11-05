module.exports = (function() {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports, function(r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o
    }
    return r
})()({
    1: [function(require, module, exports) {
        //获取日期各种参数
        const getAllTime = (date) => {
            'use strict';
            let year = date.getFullYear(),
                month = date.getMonth() + 1,
                day = date.getDate(),
                hour = date.getHours(),
                minute = date.getMinutes(),
                second = date.getSeconds(),
                obj = {
                    'year': year,
                    'month': month,
                    'day': day,
                    'hour': hour,
                    'minute': minute,
                    'second': second
                };

            for (let p in obj) {
                obj[p] = formatNumber(obj[p]);
            };
            return obj;
        };


        //日期小于10
        const formatNumber = (n) => {
            'use strict';
            n = n.toString();
            return n[1] ? n : '0' + n;
        };

        //日期格式化
        //'yyyy-MM-DD hh:mm:ss'
        const formatDate = (date, fmt) => {
            'use strict';
            var o = {
                'M+': date.getMonth() + 1, // 月份
                'd+': date.getDate(), // 日
                'h+': date.getHours(), // 小时
                'm+': date.getMinutes(), // 分
                's+': date.getSeconds(), // 秒
                'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
                'S': date.getMilliseconds() // 毫秒
            };

            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
            };
            for (var k in o) {
                if (new RegExp('(' + k + ')').test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
                };
            };
            return fmt;
        };

        /**
         * @class  发送短信倒计时
         * @author liumouliang 2017-11-23
         *
         * @return {[type]}
         */
        const _smsCountDown = () => {
            let res = {};

            res.timebox = null;
            res._clear = () => {
                clearTimeout(res.timebox);
            };
            res._run = (endTime = 60, callback) => {
                res.timebox = setTimeout(() => {
                    endTime--;

                    if (endTime) {
                        callback && callback(endTime + ' S');
                        return res._run(endTime, callback);
                    } else {
                        callback && callback(endTime);
                        return res._clear();
                    };
                }, 1000);
            };

            return res;
        };

        module.exports = {
            getAllTime, //获取日期各种参数 
            formatDate, //日期格式化
            _smsCountDown, //短信倒计时
        };

    }, {}],
    2: [function(require, module, exports) {
        const isString = (a) => {
            'use strict';
            return (typeof a === 'string' || a instanceof String);
        };

        const isFunction = (a) => {
            'use strict';
            var getType = {};
            return a && getType.toString.call(a) === '[object Function]';
        };

        const isArray = (a) => {
            'use strict';
            return a.constructor === Array;
            //return Object.prototype.toString.call(o) == '[object Array]';
        };

        const isUndefined = (value) => {
            'use strict';
            return typeof value === 'undefined';
        };

        /**
         * @class  判断是否是汉字
         * @author liumouliang 2017-11-23
         *
         * @param  {[type]}    charValue 验证数据
         * @return {[type]}
         */
        const isCharacter = (charValue) => {
            'use strict';
            return /^[\u4e00-\u9fa5]{0,}$/.test(charValue);
        };

        /**
         * @class  标准化扩展名 || Standardidize extension name
         * @author liumouliang 2017-11-23
         *
         * @param  {String}    std
         * @return {[type]}
         */
        const stdExtName = (std) => {
            'use strict';
            return std.replace(/[_-]||\s/g, '').toLowerCase();
        };

        /**
         * @class  去掉字符串空格
         * @author liumouliang 2017-11-23
         *
         * @param  {String}    str       字符串
         * @param  {Boolean}   is_global 是否去除全部空格 || 默认去除首尾空格
         * @return {[type]}
         */
        const _trim = (str, is_global) => {
            'use strict';
            var result = str.replace(/(^\s+)|(\s+$)/g, "");
            //str.replace(/(^\s*)|(\s*$)/g, "")

            if (is_global) {
                result = result.replace(/\s/g, "");
            };

            return result;
        };

        /**
         * @class  判断是否是数字
         * @author liumouliang 2017-11-23
         *
         * @param  {[type]}    numberValue 字符串或数值
         * @return {[type]}
         */
        const isNumber = (numberValue) => {
            'use strict';
            var reg1 = /^[0-9]{0,}$/;
            var reg2 = /^[1-9]{1}[0-9]{0,}$/;

            if (numberValue == null || numberValue.length == 0) return false;
            //numberValue = _trim(numberValue);

            //判断当数字只有1位时 
            if (numberValue.length < 2) return reg1.test(numberValue);
            return reg2.test(numberValue);
        };

        //浮点数计算
        const _float = (f, digit) => {
            'use strict';
            let m = Math.pow(10, digit);
            return Math.round(f * m) / m;
        };

        //获取数组最大最小值
        const getMaximin = (maximin, arr) => {
            'use strict';
            if (maximin == "max") {
                //return Math.max.apply(Math,arr); 
                return Math.max.apply(null, arr);
            } else if (maximin == "min") {
                return Math.min.apply(null, arr);
            };
        };

        //比较字符串版本
        const _compareVersion = (v1, v2) => {
            'use strict';
            v1 = v1.split('.');
            v2 = v2.split('.');
            var len = Math.max(v1.length, v2.length);

            while (v1.length < len) {
                v1.push('0');
            };
            while (v2.length < len) {
                v2.push('0');
            };

            for (var i = 0; i < len; i++) {
                var num1 = parseInt(v1[i]);
                var num2 = parseInt(v2[i]);

                if (num1 > num2) {
                    return 1;
                } else if (num1 < num2) {
                    return -1;
                };
            };

            return 0;
        };

        //生成不重复的唯一值
        const _keyid = () => {
            'use strict';
            return Number(Math.random().toString().substr(3, 8) + Date.now()).toString(36);
        };

        module.exports = {
            /*基础判断*/
            isString, //是否是字符串
            isFunction, //是否是函数
            isArray, //是否是数组
            isUndefined, //是否是Undefined
            isCharacter, //判断是否是汉字
            isNumber, //判断是否是数字

            /*基础计算*/
            _float, //浮点数计算 || 保留小数点后几位
            getMaximin, //获取数组最大最小值
            _compareVersion, //比较字符串版本
            _trim, //去掉字符串空格

            _keyid, //生成不重复的唯一值
            stdExtName, //标准化扩展名
        };

    }, {}],
    3: [function(require, module, exports) {

        const helper = require('./helper'); //帮助判断 (基础)
        const params = require('./params'); //url参数类
        const dates = require('./dates'); //时间

        //获取数组中的对象 es6有bug
        const _findIndex = (datas, data) => {
            let flag = -1;
            datas.map((el, ix) => {
                if (JSON.stringify(el) === JSON.stringify(data)) flag = ix;
            });
            return flag;
        };

        const _compareJson = (json1 = {}, json2 = [], key = '', curkeys = []) => {
            let jsonArr = [];

            json2.forEach((el, ix) => {
                let ii = json1.keys.indexOf(el[key]);

                if (~ii) {
                    curkeys.forEach((key1, ix1) => {
                        if (el[key1[0]]) json1.list[ii][key1[1]] = el[key1[0]];
                    });
                    jsonArr.push(json1.list[ii]);
                };
            });

            return jsonArr;
        };

        let utils = {
            _findIndex,
            _compareJson //比较返回数据
        };

        utils = Object.assign(
            params, //url参数类
            helper, //基础类
            dates, //时间类
            utils //公共类
        );

        module.exports = utils;

    }, {
        "./dates": 1,
        "./helper": 2,
        "./params": 4
    }],
    4: [function(require, module, exports) {
        /**
         * @class  对象参数转url字符串
         * @author liumouliang 2017-11-23
         *
         * @param  {Object}    params 对象参数
         * @return {[type]}
         */
        const _paramsToString = (params) => {
            'use strict';
            let str = '';
            let curi = 0;

            for (let key in params) {
                curi++;
                if (curi === 1) str += '?' + key + '=' + params[key];
                else str += '&' + key + '=' + params[key];
            };
            return str;
        };


        /**
         * @class  获取URL字符串的参数
         * @author liumouliang 2017-11-23
         *
         * @param  {String}    url 地址
         * @return {[type]}
         */
        const getparams = (url) => {
            'use strict';
            let ret = {},
                seg = url.match(/([^\?]+)/g);

            if (seg.length > 1) seg = seg[1].split('&');
            else return ret;

            let len = seg.length,
                i = 0,
                s;

            for (; i < len; i++) {
                if (!seg[i]) {
                    continue;
                };
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            };
            return ret;
        };

        module.exports = {
            _paramsToString, //对象参数转url字符串
            getparams, //获取URL字符串的参数
        };

    }, {}]
}, {}, [3, 4, 2, 1]);

//# sourceMappingURL=bundle.js.map
