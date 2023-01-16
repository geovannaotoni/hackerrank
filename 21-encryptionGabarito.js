function encryption(s) {
    let string = s.split(''); 
    let column = Math.ceil(Math.sqrt(string.length));
    let result = [];


    for (let index = 0; index < column; index += 1) {
        let char = index;
        let str = '';

        while(char < string.length){
            str += string[char];
            char += column;
        }
        result.push(str);
    }
    
    //return column; = 4
    return result.join(' ');
}

console.log(encryption('haveaniceday'))
//hae and via ecy
//h-0 a-1 v-2 e-3 a-4 n-5 i-6 c-7 e-8 d-9 a-10 y-11