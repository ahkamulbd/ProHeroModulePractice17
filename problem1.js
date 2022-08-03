/*
Problem 1: 

You are given an array:
 var fruits = ['Apple', 'Banana', 'Orange'];
a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.
*/
//     // Answer of (a):
// var fruits = ['Apple', 'Banana', 'Orange'];

// console.log(fruits.indexOf('Banana'));  // Output : 1 

// fruits[1] = 'Mango';
// console.log(fruits);    // Output: ['Apple', 'Mango', 'Orange']

// Answer of (b):
var fruits = ['Apple', 'Banana', 'Orange'];

fruits.pop();
console.log(fruits);

fruits.push('Watermelon');
console.log(fruits);
