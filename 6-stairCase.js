function staircase(n) {
    let symbol = '#';
    let inputLine = '';
    let inputPosition = n - 1;

    for (let indexLine = 0; indexLine < n; indexLine += 1) {

        for (let indexColumn = 0; indexColumn < n ; indexColumn += 1) {

            //if (indexColumn < inputPosition) { gabarito
            if (inputPosition > indexColumn) {
            //if (indexColumn < indexLine) {  fazia a escada ao contrário
                inputLine += ' ';

            } else {
                inputLine += symbol;
            } 
            
        }
        console.log(inputLine); // imprimir a linha
        inputLine = ''; // resetar a linha novamente
        inputPosition -= 1;
    } 


}

staircase(4);