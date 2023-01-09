function gradingStudents(grades) {
    let newGrades = [];

for (let index = 0; index < grades.length; index += 1) {
    if (grades[index] < 38) {
        newGrades[index] = grades[index];
    } else if (grades[index] >= 38 && grades[index] <= 100) {
        for (let count = 0; count < 3; count += 1) {
            if ((grades[index] + count) % 5 === 0){
                newGrades[index] = grades[index] + count;
            } else {
                newGrades[index] = grades[index];
            }
        }                       
    }
} return newGrades;

}

console.log(gradingStudents([73, 67, 38, 33]))
// [75, 67, 40, 33]

console.log(gradingStudents([44, 84, 94, 21, 0, 18, 100, 18, 62, 30, 61, 53, 0])) //solucao nao passou no teste do HackerRank