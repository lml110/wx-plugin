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
    _paramsToString,     //对象参数转url字符串
    getparams,           //获取URL字符串的参数
};
