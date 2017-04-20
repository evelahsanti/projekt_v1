/* jshint node: true */
'use strict';
var Page = require('astrolabe').Page;

var self = Page.create({
    url: {value: ''},

    setsAmountPicker: {
        get: function () {
            return element(self.by.xpath('.//*[contains(@name, "quantity")]'));
        }
    },
    setSetsAmount: {
        value: function (amountToSet) {
            return self.setsAmountPicker.sendKeys(amountToSet);
        }
    }

});
module.exports = self;