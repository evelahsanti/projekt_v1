var pageCollection = (function () {

    var mainPage = require('../tests/page/mainPage'),
        orderDiet = require('../tests/page/orderDiet'),
        stdDietForm = require('../tests/page/standardDietForm');

    return {
        mainPage: mainPage,
        orderDiet: orderDiet,
        stdDietForm: stdDietForm
    };

}());
module.exports = pageCollection;

