var chai = require('../../node_modules/chai/chai');
var expect = chai.expect;

var utils = require('../../src/utils/utils');

describe("utils", function() {
	it("Test function obj$", function() {
		var div = document.createElement('div');
		div.setAttribute("id", "obj");
		document.getElementsByTagName('body')[0].appendChild(div);
		var result = utils.obj$('obj');
		document.getElementsByTagName('body')[0].removeChild(div);
		expect(result).is.not.empty;
	});
	it("Test function val$ obj", function() {
		var input = document.createElement('input');
		input.setAttribute("id", "obj");
		input.value = '100';
		document.getElementsByTagName('body')[0].appendChild(input);
		var result = utils.val$('obj');
		document.getElementsByTagName('body')[0].removeChild(input);
		expect(result).to.equal('100');
	});
	it("Test function val$ null", function() {
		expect(utils.val$('null')).to.be.a('null');
	});
	it("Test function trimAll", function() {
		expect(utils.trimAll('    string   ')).to.equal('string');
	});
});