function countApplesAndOranges(s, t, a, b, apples, oranges) {
    
    let countApples = 0;
    let countOranges = 0;

    let applesPosition = [];
    let orangesPosition = [];
    
    for (let indexApples = 0; indexApples < apples.length; indexApples += 1) {
        applesPosition[indexApples] = apples[indexApples] + a;
        if (applesPosition[indexApples] >= s && applesPosition[indexApples] <= t) {
            countApples += 1;
        }
    }

    for (let indexOranges = 0; indexOranges < oranges.length; indexOranges += 1) {
        orangesPosition[indexOranges] = oranges[indexOranges] + b;
        if (orangesPosition[indexOranges] >= s && orangesPosition[indexOranges] <= t) {
            countOranges += 1;
        }
    }

    console.log(countApples);
    console.log(countOranges);
    
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
// 1 
//1

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])
// 1
// 2

/* s: integer, starting point of Sam's house location.
t: integer, ending location of Sam's house location.
a: integer, location of the Apple tree.
b: integer, location of the Orange tree.
apples: integer array, distances at which each apple falls from the tree.
oranges: integer array, distances at which each orange falls from the tree.
*/