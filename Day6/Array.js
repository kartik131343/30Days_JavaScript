// Day 6: Arrays


// Tasks/Activities:


// Activity 1: Array Creation and Access

// • Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// • Task 2: Access the first and last elements of the array and log them to the console.
console.log(arr[0]);
let n = arr.length;
console.log(arr[n-1]);

// Activity 2: Array Methods (Basic)


// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.
arr.push(6,7);
console.log(arr);

// • Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr.pop(n-1);
console.log(arr);

// • Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr.shift(arr[0]);
console.log(arr);

// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(9);
console.log(arr);

// Activity 3: Array Methods (Intermediate)


// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const star = arr.map(double);
console.log(star);

function double(num){
    return 2*num;
}

// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let arr1 = [1, 3, 5, 6, 7, 8];
const isEven = arr1.filter(even);
console.log(isEven);

function even(num1){
    return num1%2===0;
}

// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const sum = arr1.reduce(sumOfAll);
console.log(sum);

function sumOfAll(num2,num3){
    return num2+num3;
}

// Activity 4: Array Iteration


// • Task 10: Use a for loop to iterate over the array and log each element to the console.
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// • Task 11: Use the forEach method to iterate over the array and log each element to the console.
arr.forEach(function(i){
    console.log(i);
})

// Activity 5: Multi-dimensional Arrays


// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let array = [[1,2,3,4], [2,3,4,5], [3,4,5,6]];
console.log(array);

// • Task 13: Access and log a specific element from the two-dimensional array.
let i=2;  j=3;
console.log(array[i][j]);