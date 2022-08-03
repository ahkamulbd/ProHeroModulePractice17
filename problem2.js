/*
    Practice Problem 2:
You and your friends Tom, Jane, Peter and John got their final exam results. Your total 
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56 and John’s total score is 40. The grading chart is 
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade
Write a program to find your and your friends’ grades using if-else.
*/

var gradePoints = [85, 66, 95, 56];

for (var i = 0; i < gradePoints.length; i++) {
    var gradePoint = gradePoints[i];

    if (gradePoints[i] > 100 || gradePoints[i] < 0) {
        console.log('Invalid Score');
    }
    else if (gradePoints[i] >= 80 && gradePoints[i] <= 100) {
        console.log('Grade A');
    }
    else if (gradePoints[i] >= 60 && gradePoints[i] <= 79) {
        console.log('Grade B');
    }
    else if (gradePoints[i] >= 50 && gradePoints[i] <= 59) {
        console.log('Grade C');
    }
    else if (gradePoints[i] >= 40 && gradePoints[i] <= 49) {
        console.log('Grade D');
    }
    else {
        console.log('Grade F');
    }
    console.log(gradePoint);
}



// var gradeMyself = gradePoint[0];
// var gradeTom = gradePoint[1];
// var gradeJane = gradePoint[2];
// var gradePeter = gradePoint[3];

// console.log(gradeMyself);
// console.log(gradeTom);
// console.log(gradeJane);
// console.log(gradePeter);
