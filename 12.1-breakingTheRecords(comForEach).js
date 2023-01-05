function breakingRecords(scores) {
    let scoreMax = scores[0];
    let scoreMin = scores[0];
    let countMin = 0;
    let countMax = 0;

    scores.forEach((partida) => {
        if(partida > scoreMax) {
            countMax += 1;
            scoreMax = partida;
        } else if (partida < scoreMin) {
            countMin += 1;
            scoreMin = partida;
        }
    });


    return [countMax, countMin];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
// 2 4

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
//4 0