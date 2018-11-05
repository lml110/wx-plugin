
const helper       = require('./helper');           //帮助判断 (基础)
const params       = require('./params');           //url参数类
const dates		   = require('./dates');			//时间

//获取数组中的对象 es6有bug
const _findIndex = (datas, data) => {
    let flag = -1;
    datas.map((el, ix) => {
        if (JSON.stringify(el) === JSON.stringify(data)) flag = ix;
    });
    return flag;
};

/**
 * @class  过滤并合并拥有相同字段的数据
 * @author liumouliang 2017-11-23
 *
 * @param  {Object}    json1   {list:json2,keys}
 * @param  {Array}     json2   [] 操作函数
 * @param  {String}    key     key的值
 * @param  {Array}     curkeys 替换添加的值
 * @return {[type]}
 *
 * app._compareJson(menujson,MenuList,'OnlyDescribe',[['MiniProgramIcon','icon']])
 */
const _compareJson = (json1 = {},json2 = [],key = '',curkeys = []) => {
    let jsonArr = [];

    json2.forEach((el,ix) => {
        let ii = json1.keys.indexOf(el[key]);

        if(~ii){
            curkeys.forEach((key1,ix1) => {
                if(el[key1[0]]!=undefined)  json1.list[ii][key1[1]] = el[key1[0]];
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
    dates,  //时间类
    utils   //公共类
);

module.exports = utils;
