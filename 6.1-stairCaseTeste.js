function staircase(n) {
    let symbol = '#';
    let inputLine = '';
    let inputPosition = n - 1;

    for (let indexLine = 0; indexLine < n; indexLine += 1) {

        for (let indexColumn = 0; indexColumn < n ; indexColumn += 1) {

            if (indexColumn >= inputPosition) {
            //if (indexColumn < inputPosition) { gabarito
            //if (inputPosition > indexColumn) {
                inputLine += symbol;

            } else {
                inputLine += ' ';
            } 
            
        }
        console.log(inputLine); // imprimir a linha
        inputLine = ''; // resetar a linha novamente
        inputPosition -= 1;
    } 


}

staircase(3);

//minha solução