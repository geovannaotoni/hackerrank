function birthday(s, d, m) {
    let count = 0;
    let soma = 0;

    for (let indexBirth = 0; indexBirth < s.length; indexBirth += 1) {
        for (let index = 0; index < m; index += 1) {
            soma += s[index + indexBirth];
        }
        if (soma === d) {
            count += 1;
        }
        soma = 0;
    }
    return count;

}

/*
int s[n]: the numbers on each of the squares of chocolate
int d: Ron's birth day
int m: Ron's birth month

sum of the integers = d
length of the segment = m
*/

console.log(birthday([1, 2, 1, 3, 2], 3, 2))
// 2
// [1,2] e [2,1]

console.log(birthday([1, 1, 1, 1, 1], 3, 2))
//0

console.log(birthday([4], 4, 1))
//1