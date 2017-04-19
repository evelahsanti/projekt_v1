/* jshint node: true */
'use strict';
var Page = require('astrolabe').Page,
    world = require('../../config/world.js');

var self = Page.create({
    url: {value: ''},

    stdDietLink: {
        get: function () {
            // return element(self.by.xpath('//*[@id="ct-js-wrapper"]/section[1]/div/div/div/ul/li[2]/a'));
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