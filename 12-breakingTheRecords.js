function breakingRecords(scores) {
    let scoreMax = scores[0];
    let scoreMin = scores[0];
    let countMin = 0;
    let countMax = 0;
    let pontos = 0;

    for (let index = 1; index < scores.length; index += 1) {
        pontos = scores[index]
        
        if(pontos > scoreMax) {
            countMax += 1;
            scoreMax = pontos;
        } else if (pontos < scoreMin) {
            countMin += 1;
            scoreMin = pontos;
        }
    }

    let arrayCount = [];
    arrayCount.push(countMax, countMin);
    console.log(arrayCount);
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])
// 2 4

breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])
//4 0