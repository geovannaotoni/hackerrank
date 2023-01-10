function migratoryBirds(arr) {
    let counts = {};
    arr.forEach((count) => {
        counts[count] = (counts[count] || 0) + 1; //count nao eh o index, mas a chave
        //o valor da chave '1' vai receber OU o valor da chave '1' + 1, OU 0 + 1
        //o valor da chave '2' vai receber OU o valor da chave '2' + 1 OU 0 + 1, e assim por diante
    });

    const maxVal = Math.max(...Object.values(counts)); // maior quant de repeticoes
    
    //return Object.values(counts); //traz em um array a quantidade de vezes q cada elemento se repete
    //return Object.keys(counts); // traz em um array as chaves, os valores/ids q existem no objeto
    //return maxVal

    const num = Object.keys(counts).find((key) => counts[key] === maxVal);//find pega sempre o menor, entao entre 1 e 2 q se repetem 2 vezes, ele pega o 1

    return num;
    //return counts;
}

console.log(migratoryBirds([1,1,2,2,3]));
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
