
//Activity 1 :-


//  Task 1 - Declare a variable usig 'var', 
//  assign it a number, and log the value to the console

var a;
a = 10;
console.log("value of a is " + a);

//  Task 2 - Declare a variable usig 'let', 
//  assign it a String, and log the value to the console

let name1;
name1 = 'kartik';
console.log("print name " + name1);


//Activity 2 :-


// Task 3 - Declare a variable using const, assign it a boolean value,
// and log the value to the console.

const bool = 20 < 9;
console.log(bool);


//Activity 3 :-


// Task 4 - Create variables of diffrent dataTypes (number, String, Boolean, object, array)
// and log each of the variables type using typeOf operator.

var num = 12;
var name2 = 'kartik kumar'
var bool1 = true;
var obj = {type: "car", price: 500000, model: 'sedan'};
var arr = [500, 'mango', 20>9, 'almond'];

console.log(typeof(num));
console.log(typeof(name2));
console.log(typeof(bool1));
console.log(typeof(obj));
console.log(typeof(arr));


// Activity 4: Reassigning Variables


// • Task 5: Declare a variable using let , assign it an initial value,
//   reassign a new value, and log both values to the console.

let value1 = 33;
value1 = 55;
console.log(value1);    // output is - 55


// Activity 5: Understanding const


// • Task 6: Try reassigning a variable declared with const and observe the error.

const value2 = 50;
value2 = 70;
console.log(value2);  // error output - TypeError: Assignment to constant variable.


