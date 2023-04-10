function gradingStudents(grades) {
    let roundedGrades = [];
    // for each grade do the following checks: if the grade is less than 38, push it into the results array. 
    //Otherwise check how much is the remainder when dividing with 5. If it is greater than 2 
    //(meaning numbers ending in 3, 4, 8, 9), than update the grade by the amount missing to be the next multiple of 5. 
    //Finally push it to the results array. If the remainder is less than 3, do not update the grade, push it into the 
    //results array.
    grades.forEach((grade) => {
        if (grade < 38) {
            roundedGrades.push(grade);
        } else {
            let remainder = grade % 5;
            if (remainder > 2) {
                grade = grade + (5 - remainder);
                roundedGrades.push(grade)
            } else {
                roundedGrades.push(grade)
            }
        }
    })
    return roundedGrades;
}
