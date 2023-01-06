function birthdayCakeCandles(candles) {
    let count = 0;
    let biggestCandle = candles[0];

    for (let index = 1; index < candles.length; index += 1) {
        if (candles[index] >= biggestCandle) {
            biggestCandle = candles[index]
            count += 1;
        }
    }
    return count;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]))
//2

console.log(birthdayCakeCandles([2, 1, 3, 3]))
//2

/* com
fazendo sem ordenar (ou seja, sem usar a função sort) não funcionou, porque o valor da vela no indice 0 acaba alterando a resposta
se o indice 0 for a vela maior, ele nao conta ela 
*/