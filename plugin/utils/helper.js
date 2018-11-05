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
const _trim = (str,is_global) => {
    'use strict';
    var result = str.replace(/(^\s+)|(\s+$)/g,"");
    //str.replace(/(^\s*)|(\s*$)/g, "")
    
    if(is_global){
        result = result.replace(/\s/g,"");
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

    if (numberValue == null || numberValue.length == 0)  return false;
    //numberValue = _trim(numberValue);
    
    //判断当数字只有1位时 
    if (numberValue.length < 2)  return reg1.test(numberValue);
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
    isString,       //是否是字符串
    isFunction,     //是否是函数
    isArray,        //是否是数组
    isUndefined,    //是否是Undefined
    isCharacter,    //判断是否是汉字
    isNumber,       //判断是否是数字

    /*基础计算*/
    _float,             //浮点数计算 || 保留小数点后几位
    getMaximin,         //获取数组最大最小值
    _compareVersion,    //比较字符串版本
    _trim,              //去掉字符串空格

    _keyid,         //生成不重复的唯一值
    stdExtName,     //标准化扩展名
};
