define(function () {
    return {
        bestProfitBruteForce: function(stockPrices) {
            var bestProfit = 0,
                currentPrice,
                profit = 0;

            // Loop through entire price array
            for (var i = 0; i < stockPrices.length; i++) {
                currentPrice = stockPrices[i];

                // Test each stock price against every stock price after it
                for (var j = i+1; j < stockPrices.length; j++) {
                    profit = stockPrices[j] - currentPrice;
                    if (profit > bestProfit) {
                        bestProfit = profit;
                    }
                    console.log('bestProfit:', bestProfit);
                }
            }
            return bestProfit;
        }
    };
});
