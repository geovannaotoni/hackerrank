function miniMaxSum(arr) {
    let somas = [];
    for (let somasIndex = 0; index < arr.length; somasIndex += 1) {
        for (let index = 0; index < arr.length; index += 1) {
            somas[somasIndex] += arr[index] - arr[somasIndex];
        }
        
    } return somas;
}

console.log(miniMaxSum([1, 2, 3, 4, 5]))

//https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
