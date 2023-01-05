function bonAppetit(bill, k, b) {
    let soma = 0;
    let final = 0;
    bill.forEach(price => {
        soma += price
    });

    final = (soma - bill[k])/2; //para retirar um elemento da pra usar o splice()
  
    if (final === b) {
        console.log('Bon Appetit');
    } else {
        console.log(b - final);
    }

}


bonAppetit([3, 10, 2, 9], 1, 12);
// 5

bonAppetit([3, 10, 2, 9], 1, 7);
// Bon Appetit

bonAppetit([72, 53, 60, 66, 90, 62, 12, 31, 36, 94], 6, 288);
// 6

/*
bill: uma matriz de números inteiros representando o custo de cada item pedido
k: um número inteiro representando o índice baseado em zero do item que Anna não come
b: a quantia de dinheiro que Anna contribuiu para a conta
*/
