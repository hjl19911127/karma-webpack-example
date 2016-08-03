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
        root.dateUtils = factory();
    }
}(this, function() {

    var dateUtils = {
        /**
         * 获取年
         * @returns
         */
        getYear: function(date) {
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
    };

    return dateUtils;

}));