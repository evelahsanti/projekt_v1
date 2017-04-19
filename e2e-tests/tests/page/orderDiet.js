/* jshint node: true */
'use strict';
var Page = require('astrolabe').Page,
    world = require('../../config/world.js');

var self = Page.create({
    url: {value: ''},

    stdDietLink: {
        get: function () {
            return element(self.by.xpath('.//*[contains(@data-hover, "Dieta Standardowa")]'));
        }
    },
    goToStdDietForm: {
        value: function () {
            return self.stdDietLink.click();
        }
    }

});
module.exports = self;