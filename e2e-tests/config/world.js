var world = (function() {
    var chai = require('chai'),
    chaiAsPromised = require("chai-as-promised");
    chai.use(chaiAsPromised);

    const WIDTH = 1024,
          HEIGHT = 800;

    var expect = chai.expect,
        EC = protractor.ExpectedConditions,
        config = require('./protractor.cucumber.conf.js');

    return {
        expect: expect,
        EC: EC,
        config: config,
        WIDTH: WIDTH,
        HEIGHT: HEIGHT
    }

}());
module.exports = world;