var pageCollection = (function () {

    var mainPage = require('../tests/page/mainPage'),
        orderDiet = require('../tests/page/orderDiet');


    return {
        mainPage: mainPage,
        orderDiet: orderDiet
    };

}());
module.exports = pageCollection;

