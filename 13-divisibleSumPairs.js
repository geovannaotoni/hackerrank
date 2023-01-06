function divisibleSumPairs(n, k, ar) {
    let soma = 0;
    let count = 0;

    for (let indexFirst = 0; indexFirst < n; indexFirst += 1) {
        for (let indexSecond = 1; indexSecond < n; indexSecond += 1) {
            if (indexSecond > indexFirst) {
                soma = ar[indexFirst] + ar[indexSecond];
                //console.log([ar[indexFirst],ar[indexSecond],soma]);
                if (soma % k === 0) {
                    count += 1;
                }
            }
        }
    }
    return count;
}


console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
//console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))
//5
//n é o comprimento do array
//k é o numero divisor
//ar é o array


console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]));
//3