let sysInfo = null;
let colorInfo = null;

const utils     = require('../utils/index');
const {
    _paramsToString,
    _compareVersion,
    _float,

    _smsCountDown,
    getAllTime, 
    getMaximin,

    _compareJson,
} = utils;
const todayDate = getAllTime(new Date());

/*获取系统信息*/
function getSystemInfo(callback){
	if(sysInfo) return callback && callback(sysInfo);

	return wx.getSystemInfo({
        success(res) {
            sysInfo = res;
            return callback && callback(sysInfo);
        }
    });
};

function getColors() {
    return colorInfo;
};

function setColors(theme_color) {
    colorInfo = {

    	theme_color,
    	styleStr1: 'color: '+ theme_color +';',
    	styleStr2: 'background-color: '+ theme_color +';color: #fff;',
    	styleStr3: 'border: 1px solid ' + theme_color + ';',
    };
};

module.exports = {
    todayDate,
    startDate: [todayDate.year,todayDate.month,'01'].join('-'),
    endDate: [todayDate.year,todayDate.month,todayDate.day].join('-'),
    
	getSystemInfo,
    getColors,
    setColors
}
