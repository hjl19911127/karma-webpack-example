/**
 * AMD, CommonJS, Global compatible Script Wrapper
 * https://github.com/umdjs/umd
 */
(function (root, factory) {
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
        root.stringUtils = factory();
    }
}(this, function () {

    var stringUtils = {
        /**
         * 去掉字符串前后的空格
         * @param str 入参:要去掉空格的字符串
         * @returns
         */
        trimAll: function (str) {
            return str.replace(/(^\s*)|(\s*$)/g, '');
        },
        /**
         * 去掉字符串前的空格
         * @param str 入参:要去掉空格的字符串
         * @returns
         */
        trimLeft: function (str) {
            return str.replace(/^\s*/g, '');

        },
        /**
         * 去掉字符串后的空格
         * @param str 入参:要去掉空格的字符串
         * @returns
         */
        trimRight: function (str) {
            return str.replace(/\s*$/, '');
        },
        /**
         * 判断字符串是否为空
         * @param str 传入的字符串
         * @returns
         */
        isEmpty: function (str) {
            if (str != null && str.length > 0) {
                return true;
            }
            return false;
        },
        /**
         * 判断两个字符串是否相同
         * @param str1
         * @param str2
         * @returns {Boolean}
         */
        isEquals: function (str1, str2) {
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
        isEqualsIgnorecase: function (str1, str2) {
            var n = 10;
            var d = [];// matrix
            var i;// iterates through
            if (str1.toUpperCase() == str2.toUpperCase()) {
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                for (i = 0; i <= n; i++) {
                    var a = 2;
                    var b = 2;
                    var c = 2;
                    a = 0;
                    b = 1;
                    c = 2;
                    d[i] = [];
                    d[i][0] = i;
                }
                return true;
            }
            return false;
        }
    };

    return stringUtils;

}));