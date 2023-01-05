function catAndMouse(x, y, z) {
    let catA = Math.abs(x - z);
    let catB = Math.abs(y - z);

    if (catA < catB) {
        //console.log('Cat A')
        return 'Cat A'
    } else if (catB < catA) {
        //console.log('Cat B')
        return 'Cat B'
    } else {
        //console.log('Mouse C')
        return 'Mouse C'
    }

}

//catAndMouse(1, 2, 3);
//catAndMouse(1, 3, 2);

console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));