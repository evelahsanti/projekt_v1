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
    durationPicker: {
        value: function (setNumber) {
            return self.formContainer.all(self.by.id('okres-diety')).get(setNumber);
        }
    },
    durationValue: {
        value: function (setNumber, value) {
            return self.durationPicker(setNumber).element(self.by.cssContainingText('option', value));
        }
    },
    datesPicker: {
        value: function (setNumber) {
            return self.formContainer.all(self.by.className('calendar_button_cont')).get(setNumber);
        }
    },
    datesContainer: {
        value: function (setNumber) {
            //return self.formContainer.all(self.by.className('ui-datepicker-group ui-datepicker-group-last')).get(setNumber);
            return element(self.by.className('ui-datepicker-group ui-datepicker-group-last'));
        }
    },
    datesValue: {
        value: function (setNumber, value) {
            return self.datesContainer(setNumber).element(self.by.cssContainingText('span', value));
        }
    },

    setSetsAmount: {
        value: function (amountToSet) {
            return self.setsAmountPicker.click()
                .then(function () {
                    return self.setsAmountValue(amountToSet).click();
                });
        }
    },
    setCaloriesForSet: {
        value: function (setNumber, calories) {
            return self.caloriesAmountPicker(setNumber).click()
                .then(function () {
                    return self.caloriesAmountValue(setNumber, calories).click();
                });
        }
    },
    setDurationForSet: {
        value: function (setNumber, duration) {
            return self.durationPicker(setNumber).click()
                .then(function () {
                    return self.durationValue(setNumber, duration).click();
                });
        }
    },
    setDeliverDayForSet: {
        value: function (setNumber, day) {
            return self.datesPicker(setNumber).click()
                .then(function () {
                    return self.datesValue(setNumber, day).click();
                });
        }
    }
});
module.exports = self;