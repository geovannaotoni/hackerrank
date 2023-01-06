function birthdayCakeCandles(candles) {
    candles.sort((a, b) => a - b) // ou decrescente candles.sort((a, b) => b - a)

    let biggestCandle = candles[candles.length - 1];
    let count = 0;

    candles.forEach(candle => {
        if (candle === biggestCandle) {
            count += 1;
        }
    });
    return count;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]))
//2

console.log(birthdayCakeCandles([1, 3, 3, 3]))
//3