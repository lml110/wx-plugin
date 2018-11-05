let plugin = requirePlugin("myPlugin");

let Apps = {
	todayDate: plugin.todayDate,
    startDate: plugin.startDate,
    endDate: plugin.endDate,
	onLaunch() {

    },
    _init(callback){
    	plugin.setColors("#5e79fc");

    	return callback && callback();
    }
};

Apps = Object.assign(plugin.utils,Apps);

App(Apps);
