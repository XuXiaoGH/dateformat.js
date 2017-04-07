(function(){
	//定义一些默认参数
	var _options={
		GB: {
			dayNames        : ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
			shortDayNames   : ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
			monthNames      : ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
			shortMonthNames : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
		},
		US: {
			dayNames        : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			shortDayNames   : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			monthNames      : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			shortMonthNames : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		}
	}

	//定义一些api
	var _date_format_api = {
		secondFunc:function(){
			alert("secondFunc");
			return this;//返回当前方法
		},

		/**
		 * 格式化时间
		 * @param date
		 * @param fmt
		 * @returns {*}
		 */
		format: function (date, fmt) {
			var o = {
				'M+': date.getMonth() + 1, //月份
				'd+': date.getDate(), //日
				'h+': date.getHours(), //小时
				'm+': date.getMinutes(), //分
				's+': date.getSeconds(), //秒
				'q+': Math.floor((date.getMonth() + 3) / 3), //季度
				'S': date.getMilliseconds() //毫秒
			};
			if (/(y+)/.test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
			}
			for (var k in o){
				if (new RegExp('(' + k + ')').test(fmt)){
					fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
				}
			}
			return fmt;
		},

		/**
		 * 得到一天的开始 date类型
		 * @param date
		 */
		getDateStart: function (date) {
			var fmt = 'yyyy-MM-dd';
			var dateStartStr = this.getDateStartStr(date , fmt);
			var startTime = new Date(Date.parse(dateStartStr));
			return startTime;
		},

		/**
		 * 得到一天的开始 str 类型
		 * @param date
		 */
		getDateStartStr: function (date , fmt) {
			if(typeof fmt == 'undefined'){
				fmt = 'yyyy-MM-dd';
			}
			var dateStr = this.format(date , fmt);
			dateStr += ' 00:00:00';
			return dateStr;
		},

		/**
		 * 得到一天的结束 date类型
		 * @param date
		 */
		getDateEnd: function (date) {
			var fmt = 'yyyy-MM-dd';
			var dateEndStr = this.getDateEndStr(date , fmt);
			var endTime = new Date(Date.parse(dateEndStr));
			return endTime;
		},

		/**
		 * 得到一天的结束 str 类型
		 * @param date
		 */
		getDateEndStr: function (date , fmt) {
			if(typeof fmt == 'undefined'){
				fmt = 'yyyy-MM-dd';
			}
			var endStr = this.format(date , fmt);
			endStr += ' 23:59:59';
			return endStr;
		}


		
	}
	//这里确定了插件的名称
	this.DateFormat = _date_format_api;
})();