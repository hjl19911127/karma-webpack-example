/**
 * AMD, CommonJS, Global compatible Script Wrapper
 * https://github.com/umdjs/umd
 */
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
        /* istanbul ignore next */
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.utils = factory();
    }
}(this, function() {

    var utils = {
        /**
         * 根据传入id获取js对象
         * @param id 入参id
         * @returns
         */
        obj$: function(id) {
            return document.getElementById(id);
        },
        /**
         * 根据传入id获取js对象的值
         * @param id 入参id
         * @returns
         */
        val$: function(id) {
            var obj = document.getElementById(id);
            if (obj !== null) {
                return obj.value;
            } else {
                return null;
            }
        },
        /**
         * 去掉字符串前后的空格
         * @param str 入参:要去掉空格的字符串
         * @returns
         */
        trimAll: function(str) {
            return str.replace(/(^\s*)|(\s*$)/g, '');
        },
        /**
         * 去掉字符串前的空格
         * @param str 入参:要去掉空格的字符串
         * @returns
         */
        trimLeft: function(str) {
            return str.replace(/^\s*/g, '');

        },
        /**
         * 去掉字符串后的空格
         * @param str 入参:要去掉空格的字符串
         * @returns
         */
        trimRight: function(str) {
            return str.replace(/\s*$/, '');
        },
        /**
         * 判断字符串是否为空
         * @param str 传入的字符串
         * @returns
         */
        isEmpty: function(str) {
            if (str != null && str.length > 0) {
                return true;
            }
            return false;
        },
        /**
         * 判断两个字符串子否相同
         * @param str1
         * @param str2
         * @returns {Boolean}
         */
        isEquals: function(str1, str2) {
            if (str1 == str2) {
                return true;
            }
            return false;
        },
        /**
         * 忽略大小写判断字符串是否相同
         * @param str1
         * @param str2
         * @returns {Boolean}
         */
        isEqualsIgnorecase: function(str1, str2) {
            if (str1.toUpperCase() == str2.toUpperCase()) {
                return true;
            }
            return false;
        },
        /**
         * 判断js对象的长度
         * @param obj
         * @param min
         * @param max
         * @returns {Boolean}
         */
        checkLength: function(obj, min, max) {
            if (obj.length < min || obj.length > max) {
                return false;
            } else {
                return true;
            }
        },
        /**
         * 判断是否是数字
         * @param value
         * @returns {Boolean}
         */
        isNum: function(value) {
            if (value != null && value.length > 0 && isNaN(value) == false) {
                return true;
            } else {
                return false;
            }

        },
        /**
         * 判断是否是中文
         * @param str
         * @returns {Boolean}
         */
        isChine: function(str) {
            var reg = /^([\u4E00-\u9FA5]|[\uFE30-\uFFA0])*$/;
            if (reg.test(str)) {
                return false;
            }
            return true;
        },
        /**
         * 获取年
         * @returns
         */
        getYear: function() {
            var year = null;
            var dateTime = this.getDateTime();
            if (dateTime != null) {
                year = dateTime.getFullYear();
            } else {
                year = this.curDateTime.getFullYear();
            }
            return year;
        },
        /**
         * 获取月
         * @returns
         */
        getMonth: function() {
            var month = null;
            var dateTime = this.getDateTime();
            if (dateTime != null) {
                month = dateTime.getMonth() + 1;
            } else {
                month = this.curDateTime.getMonth() + 1;
            }
            return month;
        },
        /**
         * 获取天
         * @returns
         */
        getDay: function() {
            var day = null;
            var dateTime = this.getDateTime();
            if (dateTime != null) {
                day = dateTime.getDate();
            } else {
                day = this.curDateTime.getDate();
            }
            return day;

        },
        /**
         * 获取小时
         * @returns
         */
        getHour: function() {
            var hour = null;
            var dateTime = this.getDateTime();
            if (dateTime != null) {
                hour = dateTime.getHours();
            } else {
                hour = this.curDateTime.getHours();
            }
            return hour;
        },
        /**
         * 获取分钟
         * @returns
         */
        getMinute: function() {
            var minute = null;
            var dateTime = this.getDateTime();
            if (dateTime != null) {
                minute = dateTime.getMinutes();
            } else {
                minute = this.curDateTime.getMinutes();
            }
            return minute;
        },
        /**
         * 获取秒
         * @returns
         */
        getSecond: function() {
            var second = null;
            var dateTime = this.getDateTime();
            if (dateTime != null) {
                second = dateTime.getSeconds();
            } else {
                second = this.curDateTime.getSeconds();
            }
            return second;
        },
        /**
         * 是否是闰年
         * @returns {Boolean}
         */
        isLeapYear: function() {
            var flag = false;
            if ((this.getYear() % 4 == 0 && this.getYear() % 100 != 0) || (this.getYear() % 400 == 0)) {
                flag = true;
            }
            return flag;
        }
    }

    return utils;

}));