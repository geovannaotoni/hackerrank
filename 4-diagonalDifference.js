function diagonalDifference(arr) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let index = 0; index < arr.length; index += 1) {

        primaryDiagonal += arr[index][index];

        let indexSecondaryDiagonal = arr.length - index -1;
        secondaryDiagonal += arr[index][indexSecondaryDiagonal];

    }
    //let resultado = primaryDiagonal - secondaryDiagonal;
    //return Math.abs(resultado);
    //return (primaryDiagonal - secondaryDiagonal);
    //return (primaryDiagonal, secondaryDiagonal); não funciona usar return (a,b), deve-se usar return [a,b]
    //return [primaryDiagonal, secondaryDiagonal];
    return Math.abs(primaryDiagonal - secondaryDiagonal); // Math.abs() traz o valor absoluto daquele número

}

//console.log(diagonalDifference([[1,2,3],[4,5,6],[7,8,9]]))
console.log(diagonalDifference([
    [1,2,3],
    [4,5,6],
    [9,8,10]
]))

console.log(diagonalDifference([[1,2,3],[4,5,6],[7,8,-9]]))
