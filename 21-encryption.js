function encryption(s) {
    let string = s.split(''); //se nao colocar nada dentro do () ele simplesmente pega o valor total e coloca dentro de um array, com '' ele separa cada letra entre aspas
    let column = Math.ceil(Math.sqrt(string.length)); //Math.ceil(x) retorna o menor numero inteiro maior ou igual a x
    //let row = Math.floor(Math.sqrt(string.length));
    let result = [];


    for (let index = 0; index < column; index += 1) {
        let str = '';

        for (let char = index; char < string.length; char += column) {
            str += string[char];
        }
        result.push(str);
    }
    //return result; //retorna um array com cada frase
    return result.join(' '); //junta o array em uma string, separando cada item por um espaço
}


console.log(encryption('haveaniceday'))
//hae and via ecy
//h-0 a-1 v-2 e-3 a-4 n-5 i-6 c-7 e-8 d-9 a-10 y-11
//precisa pegar o 0-4-8, 1-5-9, 2-6-10, 3-7-11