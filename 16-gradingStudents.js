function gradingStudents(grades) {
    let newGrades = [];
    let resto = 0;

    for (let index = 0; index < grades.length; index += 1) {
        resto = grades[index] % 5;
        if (grades[index] >= 38) {
          if (resto >= 3) {
            newGrades[index] = grades[index] + 5 - resto; 
          } else {
            newGrades[index] = grades[index];
          }
            
        } else {
            newGrades[index] = grades[index];
        }
                    
    } return newGrades;
    
}

//essa foi a minha solução que passou no HackerRank

console.log(gradingStudents([73, 67, 38, 33]))
// [75, 67, 40, 33]

console.log(gradingStudents([44, 84, 94, 21, 0, 18, 100, 18, 62, 30, 61, 53, 0])) 
   