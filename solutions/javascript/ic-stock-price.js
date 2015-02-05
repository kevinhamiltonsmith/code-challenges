define(function () {
    return {
        bestProfitBruteForce: function(stockPrices) {
            // This solution is the worst performing, but it correctly solves the problem.
            // Will take O(n^2) time.
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
                }
            }
            return bestProfit;
        },

        bestProfitOptimized: function(stockPrices) {
            var bestProfit = 0,
                currentPrice,
                minPrice = stockPrices[0];

            for (var i = 1; i < stockPrices.length; i++) {
                // Get current price
                currentPrice = stockPrices[i];

                // Check if current price is the lowest possible price
                if (currentPrice < minPrice) {
                    minPrice = currentPrice;
                }

                if ((currentPrice - minPrice) > bestProfit) {
                    bestProfit = currentPrice - minPrice;
                }
            }
            return bestProfit;
        }
    };
});
