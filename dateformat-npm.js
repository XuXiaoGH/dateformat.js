/**
 * Created by admin on 2017/4/19.
 */
/**
 * Created by admin on 2017/4/18.
 */


/**
 * 格式化时间
 * @param date
 * @param fmt
 * @returns {*}
 */
exports.format = function (date, fmt) {
	var o = {
		'M+': date.getMonth() + 1, //月份
		'd+': date.getDate(), //日
		'h+': date.getHours(), //小时
		'm+': date.getMinutes(), //分
		's+': date.getSeconds(), //秒
		'q+': Math.floor((date.getMonth() + 3) / 3), //季度
		'S': date.getMilliseconds() //毫秒
	};
	if(!this.isNotEmpty(fmt)){
		fmt = 'yyyy-MM-dd hh:mm:ss';
	}
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp('(' + k + ')').test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
		}
	}
	return fmt;
};

/**
 * 将字符串时间转Date
 * @param dateStr
 * @returns {*}
 */
exports.formatToDate = function(dateStr){
	if (this.isNotEmpty(dateStr)) {
		return new Date(Date.parse(dateStr.replace(/-/g, '/')));
	}
	return '';
};

/**
 * 得到一天的开始,Date
 * @param date
 * @returns {Date}
 */
exports.getDateStart = function(date) {
	var fmt = 'yyyy-MM-dd';
	var dateStartStr = this.getDateStartStr(date, fmt);
	var startTime = new Date(Date.parse(dateStartStr));
	return startTime;
};

/**
 *得到一天的开始,字符串
 * @param date
 * @param fmt
 * @returns {*}
 */
exports.getDateStartStr = function(date, fmt) {
	if (typeof fmt == 'undefined') {
		fmt = 'yyyy-MM-dd';
	}
	var dateStr = this.format(date, fmt);
	dateStr += ' 00:00:00';
	return dateStr;
};

/**
 * 得到一天的结束， Date
 * @param date
 * @returns {Date}
 */
exports.getDateEnd = function(date) {
	var fmt = 'yyyy-MM-dd';
	var dateEndStr = this.getDateEndStr(date, fmt);
	var endTime = new Date(Date.parse(dateEndStr));
	return endTime;
};

/**
 * 得到一天的结束 字符串
 * @param date
 * @param fmt
 * @returns {*}
 */
exports.getDateEndStr = function(date, fmt) {
	if (typeof fmt == 'undefined') {
		fmt = 'yyyy-MM-dd';
	}
	var endStr = this.format(date, fmt);
	endStr += ' 23:59:59';
	return endStr;
};

/**
 * 比较日期
 * @param d1
 * @param d2
 * @returns {number}
 */
exports.compareDate = function(d1, d2) {
	if (d1 && d2) {
		if (d1.getTime() > d2.getTime()) {
			return 1;
		} else if (d1.getTime() == d2.getTime()) {
			return 0;
		} else if (d1.getTime() < d2.getTime()) {
			return -1;
		}
	}
};

/**
 * 是否为闰年
 * @param date
 * @returns {boolean}
 */
exports.isLeapYear = function(date) {
	if (date instanceof Date) {
		return (0 == date.getYear() % 4 && (( date.getYear() % 100 != 0) || (date.getYear() % 400 == 0)));
	}
	console.warn('argument format is wrong');
	return false;
};

/**
 * 是否为正确时间的字符串
 * @param dateStr
 * @returns {boolean}
 */
exports.isValidDate = function(dateStr) {
	if (this.isNotEmpty(dateStr)) {
		var r = dateStr.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
		if (r == null) {
			return false;
		}
		var d = new Date(r[1], r[3] - 1, r[4]);
		var num = (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]);
		return (num != 0);
	}
};

/**
 * 增加天数 Date
 * @param date
 * @param dayNum
 * @returns {*}
 */
exports.addDay = function(date, dayNum) {
	if (this.isNotEmpty(date) && this.isNotEmpty(dayNum) && date instanceof Date && typeof dayNum == 'number') {
		date.setDate(date.getDate() + dayNum);
	} else {
		console.warn('date or dayNum format wrong');
	}
	return date;
};

/**
 * d增加天数 字符串
 * @param dateStr
 * @param dayNum
 * @returns {string}
 */
exports.addDayStr = function(dateStr, dayNum) {
	var date = '';
	if (this.isNotEmpty(dateStr) && this.isNotEmpty(dayNum) && typeof dayNum == 'number') {
		date = this.formatToDate(dateStr);
		date.setDate(date.getDate() + dayNum);
	} else {
		console.warn('dateStr or dayNum format wrong');
	}
	return date;
};

/**
 * 增加月份 Date
 * @param date
 * @param monthNum
 * @returns {*}
 */
exports.addMonth = function(date, monthNum) {
	if (this.isNotEmpty(date) && this.isNotEmpty(monthNum) && date instanceof Date && typeof monthNum == 'number') {
		date.setMonth(date.getMonth() + monthNum);
	} else {
		console.warn('date or monthNum format wrong');
	}
	return date;
};

/**
 * 增加月份 字符串
 * @param dateStr
 * @param monthNum
 * @returns {string}
 */
exports.addMonthStr = function(dateStr, monthNum) {
	var date = '';
	if (this.isNotEmpty(dateStr) && this.isNotEmpty(monthNum) && typeof monthNum == 'number') {
		date = this.formatToDate(dateStr);
		date.setMonth(date.getMonth() + monthNum);
	} else {
		console.warn('date or monthNum format wrong');
	}
	return date;
};

/**
 * 增加年份 Date
 * @param date
 * @param yearNum
 * @returns {*}
 */
exports.addYear = function(date, yearNum) {
	if (this.isNotEmpty(date) && this.isNotEmpty(yearNum) && date instanceof Date && typeof yearNum == 'number') {
		date.setYear(date.getFullYear() + yearNum);
	} else {
		console.warn('date or yearNum format wrong');
	}
	return date;
};

/**
 * 增加年份 字符串
 * @param dateStr
 * @param yearNum
 * @returns {string}
 */
exports.addYearStr = function(dateStr, yearNum) {
	var date = '';
	if (this.isNotEmpty(dateStr) && this.isNotEmpty(yearNum) && typeof yearNum == 'number') {
		date = this.formatToDate(dateStr);
		date.setYear(date.getFullYear() + yearNum);
	} else {
		console.warn('date or yearNum format wrong');
	}
	return date;
};

/**
 *  是否为空
 * @param str
 * @returns {boolean}
 */
exports.isNotEmpty = function(str) {
	if (str != '' && str != null && typeof str != 'undefined') {
		return true;
	}
	console.warn('argument format is wrong');
	return false;
};

WEEKTYPE = {
	ZH_DAYNAME: 0,
	ZH_SDAYNAME: 1,
	US_DAYNAME: 2,
	US_SDAYNAME: 3,
};

_options = {
	ZH: {
		dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
		shortDayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
		monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
		shortMonthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
	},
	US: {
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		shortDayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		shortMonthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	}
};

/**
 * 得到今天是星期几
 * @param date
 * @param type
 * @returns {string}
 */
exports.getWeek = function(date, type) {
	if (date) {
		if (!this.isNotEmpty(type)) {
			type = 0;
		}
		var index = date.getDay();
		var dateStr = '';
		switch (type) {
			case WEEKTYPE.ZH_DAYNAME:
				dateStr = _options.ZH.dayNames[index];
				break;
			case WEEKTYPE.ZH_SDAYNAME:
				dateStr = _options.ZH.shortDayNames[index];
				break;
			case WEEKTYPE.US_DAYNAME:
				dateStr = _options.US.dayNames[index];
				break;
			case WEEKTYPE.US_SDAYNAME:
				dateStr = _options.US.shortDayNames[index];
				break;
		}
		return dateStr;
	}
};

