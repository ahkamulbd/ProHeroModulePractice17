/*
1. You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else.
*/

// var number1 = 13;
// var number2 = 79;
// var number3 = 45;

// if (number1 > number2) {
//     if (number1 > number3) {
//         console.log(number1);
//     }
//     else {
//         console.log(number3);
//     }
// }
// else {
//     if (number2 > number3) {
//         console.log(number2);
//     }
//     else {
//         console.log(number3);
//     }
// }

/*
2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else. 
*/

var side1 = 9;
var side2 = 8;
var side3 = 19;

if (side1 == side2 || side2 == side3 || side1 == side3) {
    console.log('Isosceles');
}
else {
    console.log('Not - Isosceles');
}