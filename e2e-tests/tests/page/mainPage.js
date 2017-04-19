/* jshint node: true */
'use strict';
var Page = require('astrolabe').Page,
    world = require('../../config/world.js');

var self = Page.create({
    url: {value: ''},

    orderDietLink: {
        get: function () {
            return element(self.by.css('.dropdown.menu-zamow-diete-konesera'));
        }
    },
    goToOrderDietPage: {
        value: function () {
            return self.orderDietLink.click();
        }
    }

});
module.exports = self;