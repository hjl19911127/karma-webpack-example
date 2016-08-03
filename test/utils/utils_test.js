var chai = require('../../node_modules/chai/chai');
var expect = chai.expect;

var utils = require('../../src/utils/utils');

describe("utils", function () {
    it("Test function obj$", function () {
        var div = document.createElement('div');
        div.setAttribute("id", "obj");
        document.getElementsByTagName('body')[0].appendChild(div);
        var result = utils.obj$('obj');
        document.getElementsByTagName('body')[0].removeChild(div);
        expect(result).is.not.empty;
    });
    it("Test function val$ obj", function () {
        var input = document.createElement('input');
        input.setAttribute("id", "obj");
        input.value = '100';
        document.getElementsByTagName('body')[0].appendChild(input);
        var result = utils.val$('obj');
        document.getElementsByTagName('body')[0].removeChild(input);
        expect(result).to.equal('100');
    });
    it("Test function val$ null", function () {
        expect(utils.val$('null')).to.be.null;
    });
    it("Test function checkLength true", function () {
        var obj = {};
        obj.length = 2;
        expect(utils.checkLength(obj, 0, 2)).to.be.true;
    });
    it("Test function checkLength false", function () {
        var obj = {};
        obj.length = 2;
        expect(utils.checkLength(obj, 0, 1)).to.be.false;
    });
    it("Test function isNum true", function () {
        expect(utils.isNum('1')).to.be.true;
    });
    it("Test function isNum false", function () {
        expect(utils.isNum('a')).to.be.false;
    });
    it("Test function isChinese true", function () {
        expect(utils.isChinese('a')).to.be.true;
    });
    it("Test function isChinese false", function () {
        expect(utils.isChinese('哈哈')).to.be.false;
    });
    it("Test function Levenshtein_Distance true", function () {
        expect(utils.Levenshtein_Distance('a', 'ab')).to.equal(1);
    });

});