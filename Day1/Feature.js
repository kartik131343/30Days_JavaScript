// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both
// the value and type of each variable to the console.
// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and
// const when it comes to reassignment.


// Declare variables of different data types
let num1 = 42;                    // Number
let str = "Hello, World!";       // String
let bool2 = true;                 // Boolean
let arr1 = [1, 2, 3];             // Array
let obj1 = { name: "John", age: 30 }; // Object
let nul = null;                  // Null
let undef;                       // Undefined

// Log the value and type of each variable
console.log(`num: ${num} - type: ${typeof num}`);
console.log(`str: ${str} - type: ${typeof str}`);
console.log(`bool: ${bool} - type: ${typeof bool}`);
console.log(`arr: ${arr} - type: ${typeof arr}`);
console.log(`obj: ${JSON.stringify(obj)} - type: ${typeof obj}`);
console.log(`nul: ${nul} - type: ${typeof nul}`);
console.log(`undef: ${undef} - type: ${typeof undef}`);





//Start Learning Day1

//Activity 1 Variable declaration
var taskOne=1;
console.log(taskOne);

let taskTwo = "Developer";
console.log(taskTwo)

//Activity 2 Constant Declaration
const taskThree= true;
console.log(taskThree)

//Activity 3 Data types 

let numValue=88;
let stringValue="I am Developer";
let boolValue=true;
let objValue={
    name:"Shreepad",
    profile:"Developer"
}
let arrValue = ["Developer","Tester","Consultant"];

console.log(typeof numValue);
console.log(typeof stringValue);
console.log(typeof boolValue);
console.log(typeof objValue);
console.log(typeof arrValue);

//Activity 4 Reassigning values

let assignCheckValue="Js Developer"
console.log(assignCheckValue);

assignCheckValue="React Developer";
console.log(assignCheckValue);

//Activity 5 Understanding Const

const understandingConstValue=true;
console.log(understandingConstValue);

understandingConstValue=false;
console.log(understandingConstValue);