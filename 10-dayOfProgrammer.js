function dayOfProgrammer(year) {
    if (year >= 1700 && year <= 2700) {

        //calendario juliano
        if (year <= 1917) { 
            if (year % 4 === 0) { //ano bissexto no calendario juliano
                return `12.09.${year}`;
            } else { // ano normal no calendario juliano
                return `13.09.${year}`;
            }            
        } 
        
        // para o ano de 1918
        else if (year === 1918) { //when the next day after January 31st was February 14th // Obs: no gabarito está sem o else
            return `26.09.${year}`;
        } 

        //calendario gregoriano
        else if (year >= 1919) { // Obs: no gabarito está sem o else
            if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) { // ano bissexto no calendario gregoriano
                return `12.09.${year}`;
            } else { //ano normal no calendario gregoriano
                return `13.09.${year}`;
            }
        }

    } else {
        return `Please, input a year between 1700 and 2700.`
    }

}

console.log(dayOfProgrammer(1700));
console.log(dayOfProgrammer(1918));
console.log(dayOfProgrammer(2000));
console.log(dayOfProgrammer(2001));
console.log(dayOfProgrammer(2100));

//12.09.1700