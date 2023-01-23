

const maxProfit = (prices) => {

    let sellIndex = 0,
        byIndex = 0,
        rest = null

    for (let i = 0; i < prices.length - 1; i++) {
        let byCur = i
        let sellCur = i + 1

        if (rest === null && prices[byCur] < prices[sellCur]) {
            rest = prices[sellCur] - prices[byCur]
            sellIndex = sellCur
            byIndex = byCur
            continue
        }
        if (rest !== null) {

            if (prices[sellCur] - prices[byIndex] >= rest) {
                sellIndex = sellCur
            }
            if (prices[byCur] <= prices[byIndex]) {
                byIndex = byCur
            }

            if (sellIndex > byIndex) {
                rest = prices[sellIndex] - prices[byIndex]
            }
        }

    }
    return rest
}


const prices = [7,1,5,3,6,4]
maxProfit(prices)