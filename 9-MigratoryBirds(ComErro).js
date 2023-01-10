function migratoryBirds(arr) {
    let counts = {};

    // for (let index = 0; index < arr.length; index += 1) {
    //     for (let index2 = 1; index2 < arr.length; index2 += 1) {
            
    //     }
    // }

    arr.forEach((count) => {
        counts[count] = (counts[count] || 0) + 1;
    });
    
    return counts;
}

console.log(migratoryBirds([1,1,2,2,3]));
//console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));


// function migratoryBirds(arr) {
//     let quantidades = {};
//     arr.forEach((conte) => {
//         quantidades[conte] = (quantidades[conte] || 0) + 1;
//     });
//     return quantidades;
// }

// console.log(migratoryBirds([1,1,2,2,3]));



//Tentativa:
//console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));

    // let repeticao = 0;

    // for (let index = 0; index < n.length; index += 1){
    //     for (let compareIndex = 0; index < n.length; index += 1) {

    //         if (n[index] === n[compareIndex]) {
    //             repeticao += 1;

    //         } 
    //         console.log(n[index], repeticao);
    //     } 
    // } 
