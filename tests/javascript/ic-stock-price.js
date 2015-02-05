define([
    '../../solutions/javascript/ic-stock-price.js'
],
function(bestProfit) {
    module('Find Best Stock Price Profit Tests', {
        teardown: function() {
            document.getElementById('qunit-fixture').innerHTML = '';
        }
    });

    // Helper function to build a stock price array that goes up and down in price
    var buildStockPriceArray = function(basePrice, totalMin, pt1, pt2, pt3, pt4, pt5, pt6) {
        var arr = [basePrice],
            price = basePrice,
            priceJump = 1,
            dir = 'up';

        for (var i = 0; i <= totalMin; i++) {
            if (i === pt1 || i === pt2 || i === pt3 || i === pt4 || i === pt5 || i == pt6) {
                dir = dir === 'up' ? 'down' : 'up';
                priceJump += 1;
            }
            if (dir === 'up') {
                price += priceJump;
            } else {
                price -= priceJump;
            }
            arr.push(price);
        }
        return arr;
    };

    // var test1 = bestProfit.bestProfitBruteForce(buildStockPriceArray(200, 300, 30, 50, 140, 190, 240));
    var test1 = bestProfit.bestProfitBruteForce(buildStockPriceArray(200, 60, 7, 18, 33, 35, 48, 58));

    test('Check For Maximum Profit', function() {
        equal(test1, 102, 'Correctly found the max profit using brute force');
    });
});