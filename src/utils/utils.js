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
        root.utils = factory();
    }
}(this, function () {

    var utils = {
        /**
         * 根据传入id获取js对象
         * @param id 入参id
         * @returns
         */
        obj$: function (id) {
            return document.getElementById(id);
        },
        /**
         * 根据传入id获取js对象的值
         * @param id 入参id
         * @returns
         */
        val$: function (id) {
            var obj = document.getElementById(id);
            if (obj !== null) {
                return obj.value;
            } else {
                return null;
            }
        },
        /**
         * 判断js对象的长度
         * @param obj
         * @param min
         * @param max
         * @returns {Boolean}
         */
        checkLength: function (obj, min, max) {
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
        isNum: function (value) {
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
        isChinese: function (str) {
            var reg = /^([\u4E00-\u9FA5]|[\uFE30-\uFFA0])*$/;
            if (reg.test(str)) {
                return false;
            }
            return true;
        },
        Levenshtein_Distance: function (s, t) {
            var n = s.length;// length of s
            var m = t.length;// length of t
            var d = [];// matrix
            var i;// iterates through s
            var j;// iterates through t
            var s_i;// ith character of s
            var t_j;// jth character of t
            var cost;// cost
            if (n == 0) return m;
            if (m == 0) return n;
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
                d[i] = [];
                d[i][0] = i;
            }
            for (j = 0; j <= m; j++) {
                d[0][j] = j;
            }
            for (i = 1; i <= n; i++) {
                s_i = s.charAt(i - 1);
                for (j = 1; j <= m; j++) {
                    t_j = t.charAt(j - 1);
                    if (s_i == t_j) {
                        cost = 0;
                    } else {
                        cost = 1;
                    }
                    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
                }
            }
            return d[n][m];
        }
    };

    return utils;

}));