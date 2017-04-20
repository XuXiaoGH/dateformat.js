# dateformat.js

> **dateformat.js** 是一个非常简洁、轻量级、不到 `5kb` 的很简洁的 Javascript 库，
它是一个时间的处理工具类。

 - 支持常用的时间格式化
 - 得到当前星期，时间对比大小，是否为闰年
 - 增加日期，增加月份，增加年份等等
 - 支持自动实时更新；
 - 支持浏览器script方式；
 - 测试用例完善，执行良好；



# 使用方法


**1. 引入 dateformat.js**


通过 `script` 标签引入到html文件中，会生成一个全局变量 `DateFormat`.

```js
<script src="dateformat.js"></script>
```

当然你还可以在通过 import 引入
```
import dateformat form '...自己的路径';
```

最后该项目也上传到npm上，你可以通过
```
//安装
npm install dateformat-util  
```
```
//使用
var dateformat = require('dateformat-util');
dateformat.format(new Date());

```





**3. 使用 `dateformat` 类**

直接调用方法即可
```js
DateFormat.format(new Date(), 'yyyy-MM-dd hh:mm:ss');
```


# 具体方法


**1. format(date, fmt)**

`format` 是将 Date类型的时间进行格式化的工具方法：

```js
DateFormat.format(new Date()) //不传 fmt，则默认为 yyyy-MM-dd hh:mm:ss ;
DateFormat.format(new Date(), 'yyyy-MM-dd hh:mm:ss');
DateFormat.format(new Date(), 'yyyy/MM/dd hh:mm:ss');
DateFormat.format(new Date(), 'yyyy/MM/dd');
...
```
**2. formatToDate(dateStr)**

`formatToDate` 是将 字符串类型的时间 转化成 Date 类型的工具方法：

```
DateFormat.formatToDate('2017-04-18 12:12:12');
DateFormat.formatToDate('2017/04/18 12:12:12');
...
```

**3. getDateStart(date)**

`getDateStart` 是得到一天的开始，工作中会碰到这种需要得到某一天的开始或结束的时间点。
```js
DateFormat.getDateStart(new Date());  //今天是4.18, 那返回的是今天 00:00:00的Date类型

```
如果想返回字符串类型，可以使用 `getDateStartStr(date, fmt)` 方法，fmt非必传
```js
DateFormat.getDateStartStr(new Date(), 'yyyy-MM-dd hh:mm:ss'); //返回 2017-04-18 00:00:00
```

**4. getDateEnd(date)**

`getDateEnd` 是得到一天的结束

```js
DateFormat.getDateEnd(new Date());  //今天是4.18, 那返回的是今天 23:59:59的Date类型

```
如果想返回字符串类型，可以使用 `getDateEndStr(date, fmt)` 方法，fmt非必传
```js
DateFormat.getDateEndStr(new Date(), 'yyyy-MM-dd hh:mm:ss'); //返回 2017-04-18 23:59:59
```

**5. compareDate(d1, d2)**

`compareDate` 比较两个日期的大小
返回 1 , 则 d1 > d2
返回 0 , 则 d1 == d2
返回 -1, 则 d1 < d2

```js
DateFormat.compareDate(new Date(), new Date()); 
```

**6. getWeek(date, type)**

`getWeek` 得到一个日期是星期几

```js
DateFormat.getWeek(new Date());  //type非必传，默认返回 '星期 X'的格式
DateFormat.getWeek(new Date(), DateFormat.WEEKTYPE.US_DAYNAME); // Monday


/*
type 枚举如下：

DateFormat.WEEKTYPE.ZH_DAYNAME :      星期一
DateFormat.WEEKTYPE.ZH_SHORTDAYNAME:  周一
DateFormat.WEEKTYPE.US_DAYNAME：      Monday
DateFormat.WEEKTYPE.US_SDAYNAME：     Mon
*/

```

**7. addDay(date, num)**

增加系列：

```
addDay(date, num) 
addDayStr(dateStr, num) 
addMonth(date, num)
addMonthStr(dateStr, num)
addYear(date, num)
addYearStr(dateStr, num)

```

使用起来很简单，今天是 2017.04.18

```
DateFormat.addDay(new Date(), 3);   //返回是三天后的  Date类型
DateFormat.addDayStr('2017-04-18 12:12:12', 3) // 返回 Fri Apr 21 2017 12:12:12 GMT+0800 (中国标准时间)

// 其他 month year的方式同上
```

