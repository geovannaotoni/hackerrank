function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let index = 0; index < arr.length; index += 1) {
        if (arr[index] > 0) {
            positive += 1;
        } else if (arr[index] < 0) {
            negative += 1;
        } else if (arr[index] === 0) {
            zero += 1;
        }

    }

    //let fractionPositive = positive / arr.length;
    //let fractionNegative = negative / arr.length;
    //let fractionZero = zero / arr.length;
    //return [fractionPositive, fractionNegative, fractionZero];

    //return [(positive / arr.length), (negative / arr.length), (zero / arr.length)];
    //return [positive / arr.length, negative / arr.length, zero / arr.length];
    console.log ((positive / arr.length).toFixed(6) + "\n" +  (negative / arr.length).toFixed(6) + "\n" +  (zero / arr.length).toFixed(6)); 
    // toFixed(x) - limita o resultado a um numero de casas decimais
    // "\n" - quebra de linha

} 

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));