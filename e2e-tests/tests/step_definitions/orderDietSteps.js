/* jshint node: true */
'use strict';
const world = require('../../config/world.js'),
    pages = require('../../config/pageCollection.js');

var addBookSteps = function () {
    var orderDiet = pages.orderDiet,
        mainPage = pages.mainPage,
        stdDietForm = pages.stdDietForm;

    this.Given(/^I am on Order Diet page$/, function (callback) {
        browser.ignoreSynchronization = true;
        browser.get(world.config.config.baseUrl)
            .then(function () {
                browser.driver.manage().window().maximize();
            })
            .then(function () {
                return mainPage.goToOrderDietPage();
            })
            .then(callback);
    });

    this.When(/^I select Standard Diet$/, function (callback) {
        orderDiet.goToStdDietForm()
            .then(callback)
    });

    this.When(/^I fill the form for (.*) sets with data:$/, function (setsAmount, data, callback) {
        var table = data.hashes(),
            i;

        stdDietForm.setSetsAmount(setsAmount)
            .then(function () {
                browser.sleep(5000);
                for(i = 1; i < setsAmount; i++) {
                    stdDietForm.setCaloriesForSet(i, table[i-1].caloriesAmount);
                }

            })
            //.then(function () {
            //    return browser.pause();
            //})
            .then(callback);
    });

    this.When(/^I add diet to the basket$/, function (callback) {
        callback();
    });

    this.Then(/^I should see Standard Diet in the basket$/, function (callback) {
        callback();
    });

};
module.exports = addBookSteps;