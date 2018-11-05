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
    res._run = (endTime=60, callback) => {
        res.timebox = setTimeout(()=>{
            endTime--;

            if(endTime) {
                callback && callback(endTime+' S');
                return res._run(endTime,callback);
            }else{
                callback && callback(endTime);
                return res._clear();
            };
        },1000);
    };

    return res;
};

module.exports = {
    getAllTime,     //获取日期各种参数 
    formatDate,     //日期格式化
    _smsCountDown,  //短信倒计时
};
