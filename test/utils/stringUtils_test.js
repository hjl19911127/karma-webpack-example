var chai = require('../../node_modules/chai/chai');
var expect = chai.expect;

var utils = require('../../src/utils/stringUtils');

describe("stringUtils", function () {
    it("Test function trimAll", function () {
        expect(utils.trimAll('    string   ')).to.equal('string');
    });
    it("Test function trimLeft", function () {
        expect(utils.trimLeft('    string   ')).to.equal('string   ');
    });
    it("Test function trimRight", function () {
        expect(utils.trimRight('    string   ')).to.equal('    string');
    });
    it("Test function isEmpty true", function () {
        expect(utils.isEmpty('string')).to.be.true;
    });
    it("Test function isEmpty false", function () {
        expect(utils.isEmpty('')).to.be.false;
    });
    it("Test function isEquals true", function () {
        expect(utils.isEquals('string', 'string')).to.be.true;
    });
    it("Test function isEquals false", function () {
        expect(utils.isEquals('', 'string')).to.be.false;
    });
    it("Test function isEqualsIgnorecase true", function () {
        expect(utils.isEqualsIgnorecase('String', 'string')).to.be.true;
    });
    it("Test function isEqualsIgnorecase false", function () {
        expect(utils.isEqualsIgnorecase('', 'string')).to.be.false;
    });
});