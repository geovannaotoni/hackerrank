function kangaroo(x1, v1, x2, v2) {
    let yesNo = 'NO'
    let count = (x1 - x2)/(v2 - v1)

    if (Number.isInteger(count) && count > 0) {
        yesNo = 'YES';
    } 
    return yesNo;
} 

//Achei a minha solução melhor que a do gabarito do prof inclusive

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

  
    



    







