var world = (function() {
    var chai = require('chai'),
    chaiAsPromised = require("chai-as-promised");
    chai.use(chaiAsPromised);

    var expect = chai.expect,
        EC = protractor.ExpectedConditions,
        config = require('./protractor.cucumber.conf.js');

    return {
        expect: expect,
        EC: EC,
        config: config
    }

}());
module.exports = world;