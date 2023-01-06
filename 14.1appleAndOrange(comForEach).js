function countApplesAndOranges(s, t, a, b, apples, oranges) {
    
    let countApples = 0;
    let countOranges = 0;
    
    apples.forEach((applePosition) => {
        if ((applePosition + a) >= s && (applePosition + a) <= t) {
            countApples += 1
        }
    });

    oranges.forEach((orangesPosition) => {
        if ((orangesPosition + b) >= s && (orangesPosition + b) <= t) {
            countOranges += 1
        }
    })

    console.log(countApples);
    console.log(countOranges);
    
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
//1 
//1

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])
// 1
// 2