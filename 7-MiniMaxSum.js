function miniMaxSum(arr) {
    arr.sort((a,b) => a -b);

    let sum = 0;
    arr.forEach((value) => {sum += value});

    let minVal = sum - arr[0];
    let maxVal = sum - arr[arr.length - 1];


    console.log(maxVal, minVal);
}

miniMaxSum([1, 2, 3, 4, 5]);

//https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

/*
    let somas = [];
    for (let somasIndex = 0; index < arr.length; somasIndex += 1) {
        for (let index = 0; index < arr.length; index += 1) {
            somas[somasIndex] += arr[index] - arr[somasIndex];
        }
        
    } return somas;
*/