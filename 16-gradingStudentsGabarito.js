function gradingStudents(grades) {
   for (let index = 0; index <grades.length; index += 1) {
    if (grades[index] >= 38) {
        if (grades[index] % 5 === 3) {
            grades[index] += 2;
        } else if ( grades[index] % 5 === 4) {
            grades[index] += 1;
        }
    } 
   }
   return grades;
    
}

console.log(gradingStudents([73, 67, 38, 33]))
// [75, 67, 40, 33]

console.log(gradingStudents([44, 84, 94, 21, 0, 18, 100, 18, 62, 30, 61, 53, 0])) 
   