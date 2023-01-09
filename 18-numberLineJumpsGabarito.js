function kangaroo(x1, v1, x2, v2) {
    let jump1 = x1;
    let jump2 = x2;
    let yesNo = 'NO';

    for (let index = 0; index < 10000; index += 1) {
        jump1 += v1;
        jump2 += v2;

        if (jump1 === jump2) {
            yesNo = 'YES';
        }
    }
    return yesNo;

}

/*
x1: posição de inicio de 1
v1: distancia do salto de 1
x2: posição de inicio de 2
v2: distancia de salto de 2
*/

console.log(kangaroo(0, 3, 4, 2))
//YES

console.log(kangaroo(0, 2, 5, 3))
//NO