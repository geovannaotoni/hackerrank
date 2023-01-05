function bonAppetit(bill, k, b) {
    let soma = 0;
    let final = 0;
    
    bill.splice(k,1); //funcao para tirar um elemento, o k eh o index do elemento a ser tirado, e o 1 eh quantos elementos vai tirar
    bill.forEach(price => {soma += price});
    final = soma/2

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