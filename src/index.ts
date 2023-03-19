console.log("Hello World..!");

/* ----- Data Types in TypeScript ----- */

// 1.number
let value1: number = 10;
let value2: number = 15.80;
console.log(value1 + " " + value2);

// 2.string
let firstName: string = "Dasun";
console.log(firstName);

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
function calculate1() {
    return 0;
}

console.log(calculate1());
console.log(typeof calculate1());


