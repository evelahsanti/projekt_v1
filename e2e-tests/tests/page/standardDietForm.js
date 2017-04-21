/* jshint node: true */
'use strict';
var Page = require('astrolabe').Page;

var self = Page.create({
    url: {value: ''},

    formContainer: {
        get: function () {
            return element(self.by.id('product-865'));
        }
    },
    setsAmountPicker: {
        get: function () {
            return self.formContainer.element(self.by.xpath('.//*[contains(@name, "quantity")]'));
        }
    },
    setsAmountValue: {
        value: function (value) {
            return self.setsAmountPicker.element(self.by.cssContainingText('option', value));
        }
    },
    caloriesAmountPicker: {
        value: function (setNumber) {
            return self.formContainer.all(self.by.id('kalorycznosc')).get(setNumber);
        }
    },
    caloriesAmountValue: {
        value: function (setNumber, value) {
            return self.caloriesAmountPicker(setNumber).element(self.by.cssContainingText('option', value));
        }
    },
    setSetsAmount: {
        value: function (amountToSet) {
            return self.setsAmountPicker.click()
                .then(function () {
                    self.setsAmountValue(amountToSet).click();
                });
        }
    },
    setCaloriesForSet: {
        value: function (setNumber, calories) {
            return self.caloriesAmountPicker(setNumber).click()
                .then(function () {
                    self.caloriesAmountValue(setNumber, calories).click();
                });
        }
    }

});
module.exports = self;