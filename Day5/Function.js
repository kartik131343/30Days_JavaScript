// Day 5: Functions


// Tasks/Activities:


// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
const evenOdd = function(number){
    if(number % 2 == 0){
        return "even";
    }
    else{
        return "odd";
    }
}
let a = evenOdd(55);
console.log(a);

// • Task 2: Write a function to calculate the square of a number and return the result.
const square = function (number) {
    return number*number;
}
console.log(square(5));


// Activity 2: Function Expression


// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const maxof2 = function(number1, number2){
    if(number1 > number2){
        return number1;
    }else{
        return number2;
    }
}
console.log(maxof2(33, 73));
 
// • Task 4: Write a function expression to concatenate two strings and return the result.
const concate = function(str1 , str2){
    let str3 ="";
    str3 = str1 + str2;
    return str3;
}
console.log(concate("kartik", " kumar"));


// Activity 3: Arrow Functions


// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sumOf2 = (number1, number2) => {
    return number1+number2;
}
console.log(sumOf2(10, 13));

// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const check=(str, a)=>{
    return str.includes(a);
}
console.log(check("kartik", 'a'));


// Activity 4: Function Parameters and Default Values


// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const multiply = (num1, num2=5) => {
    return num1*num2;
}
console.log(multiply(4, 3));
console.log(multiply(4));

// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const happyBirthday = (str, age)=>{
    return "Happy Birthday "+ str + " for becoming " +age+ " year old"
}
console.log(happyBirthday("kartik", 24));


// Activity 5: Higher-Order Functions


// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
helloWorld = ()=>{
    console.log("hello world! ");
}
nTimes = (func, n)=>{
    for(let i=0; i<n; i++){
        func();
    }
}

nTimes(helloWorld, 3);

// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function
// to the result.
const applyFunctions = (func1, func2, value) => {
    const resultFromFunc1 = func1(value);
    const finalResult = func2(resultFromFunc1);
    return finalResult;
  };
  
  // Example usage:
  const addOne = x => x + 1;
  const double = x => x * 2;
  
  const result = applyFunctions(addOne, double, 3);
  console.log(result); // Output: 8 (first addOne(3) = 4, then double(4) = 8)