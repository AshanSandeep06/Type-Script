"use strict";
console.log("Hello World..!");
/* ----- Data Types in TypeScript ----- */
// 1.number
let value1 = 10;
let value2 = 15.80;
console.log(value1 + " " + value2);
// 2.string
let firstName = "Dasun";
console.log(firstName);
// 2.string
let flag = false;
console.log(flag);
/* ======================================================================== */
/* ----- Arrays ----- */
let numberArray1 = [10.2, 20, 30.65, 40, 50]; // 1st method
let numberArray2 = [10.2, 20, 30.65, 40, 50]; // 2nd method
let stringArray = ["Dasun", "Sandun", "Kasun"];
// Iterating array values
for (let name of stringArray) {
    console.log(name);
}
/* ======================================================================== */
// Union Operator (OR)
let array = [10, 20, "30"];
// any (Can be given any data type)
let x = 10;
console.log(x);
// Tuple
let man = ["Ashan", 22];
/* ======================================================================== */
/* ----- Functions ----- */
// 1.Parameter-less and return type Functions
function calculate1() {
    return 0;
}
console.log(calculate1());
console.log(typeof calculate1());
function calculate2() {
    return 0;
    // return "name";  // Can not return a string value from a function
    // that has number return type
}
function calculate3() {
    // return -1;  // return type of any, which has a function that can
    // either return a value or not
}
// 2.Parameterized Functions
function calculateAverageMarks(subjectCount, totalMarks) {
    return totalMarks / subjectCount;
}
let averageMarks = calculateAverageMarks(3, 285);
console.log("Average Marks : " + averageMarks + "%");
function sumOfTwoNumbers(firstNumber, secondNumber) {
    if (secondNumber) {
        return firstNumber + secondNumber;
    }
    return firstNumber;
}
console.log(sumOfTwoNumbers(15));
console.log(sumOfTwoNumbers(15, 35));
/* ======================================================================== */
/* ----- Objects ----- */
