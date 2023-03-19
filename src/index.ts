console.log("Hello World..!");

/* ----- Data Types in TypeScript ----- */

// 1.number
let value1: number = 10;
let value2: number = 15.80;
console.log(value1 + " " + value2);

// 2.string
let firstName: string = "Dasun";
console.log(firstName);

// 2.string
let flag: boolean = false;
console.log(flag);

/* ======================================================================== */

/* ----- Arrays ----- */
let numberArray1: number[] = [10.2, 20, 30.65, 40, 50]; // 1st method
let numberArray2: Array<number> = [10.2, 20, 30.65, 40, 50]; // 2nd method

let stringArray: string[] = ["Dasun", "Sandun", "Kasun"];

// Iterating array values
for (let name of stringArray) {
    console.log(name);
}

/* ======================================================================== */

// Union Operator (OR)
let array: (string | number)[] = [10, 20, "30"];

// any (Can be given any data type)
let x: any = 10;
console.log(x);

// Tuple
let man: [string, number] = ["Ashan", 22];

/* ======================================================================== */

/* ----- Functions ----- */

// 1.Parameter-less and return type Functions
function calculate1() {
    return 0;
}

console.log(calculate1());
console.log(typeof calculate1());

function calculate2(): number {
    return 0;
    // return "name";  // Can not return a string value from a function
    // that has number return type
}

function calculate3(): any {
    // return -1;  // return type of any, which has a function that can
    // either return a value or not
}

// 2.Parameterized Functions
function calculateAverageMarks(subjectCount: number, totalMarks: number): number {
    return totalMarks / subjectCount;
}

let averageMarks = calculateAverageMarks(3, 285);
console.log("Average Marks : " + averageMarks + "%");

function sumOfTwoNumbers(firstNumber: number, secondNumber?: number) {
    if (secondNumber) {
        return firstNumber + secondNumber;
    }

    return firstNumber;
}

console.log(sumOfTwoNumbers(15));
console.log(sumOfTwoNumbers(15, 35));

/* ======================================================================== */

/* ----- Objects ----- */
let s1: { id: number, name: string } = {
    id: 2001,
    name: "Nimal"
}

// Optional Properties (eg -: address?: string)
let s2: { id: number, name: string, age: number, address?: string } = {
    // All Properties Should be declared in this object except Optional Properties Otherwise,
    // Error has been occurred
    id: 2001,
    name: "Nimal",
    age: 22,
    // This address property should not compulsory to this s2 object because of
    // this property is an Optional Property
    // address: "Galle"
}
console.log(s2.address);

// Parameterized Functions With Function Expressions
let studentObject: { id: number, name: string, age: number, enrollDate: (date: Date) => void } = {
    id: 2001,
    name: "Nimal",
    age: 22,
    // Arrow functions
    enrollDate: (date: Date) => {
        console.log(date);
    }
}

studentObject.enrollDate(new Date());

/* ======================================================================== */

/* ----- Type Aliases ----- */
type Student = {
    id: number,
    name: string
}

let s3: Student = {
    id: 2001,
    name: "Bimal"
}

console.log(s3);

/* ======================================================================== */

// Union Operator
function getNumber(myNumber: number | string): number {
    console.log("My Number is : " + myNumber);

    if (typeof myNumber == "string") {
        return parseInt(myNumber);
    }

    return myNumber;
}

console.log(getNumber("15"));

/* ======================================================================== */




