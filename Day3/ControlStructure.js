<<<<<<< HEAD
// Day 3: Control Structures


// Tasks/Activities:




// Activity 1: If-Else Statements


// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = 12;
if(num > 0){
    console.log(num + " number is +ve");
}else if(num < 0){
    console.log(num + " number is -ve");
}else{
    console.log(num + " number is 0");
}

// • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
age = 18;
if(age >= 18){
    console.log(age + " You are eligible for Vote");
}else if(age < 18 && age >0){
    console.log(age + " You are not eligible for Vote");
}else{
    console.log(age + " Invalid age");
}


// Activity 2: Nested If-Else Statements


// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.
a = 99; b = 77; c = 11;
if(a>b && a>c){
    console.log(a + " is largest no.");
}else if(b>a && b>c){
    console.log(b + " is largest no.");
}else{
    console.log(c + " is largest no.");
}


// Activity 3: Switch Case


// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day =6;

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Sturday");
        break;

    default:
        console.log("Please input no. in range of 1-7");
        break;
}

// • Task 5: Write a program that uses a switch case to assign a grade (A', 'B', 'C', 'D', 'E) based on a score and log the grade to the console.
let score=66;
switch (true) {
    case (score >=90):
        console.log("Grade A");
        break;
    case (score >=80 && score <90):
        console.log("Grade B");
        break;
    case (score >=70 && score < 80):
        console.log("Grade C");
        break;
    case (score >=50 && score < 70):
        console.log("Grade D");
        break;
    case (score >=30 && score < 50):
        console.log("Grade E");
        break;

    default:
        console.log("Please input no. in range of 0-100");
        break;
}


// Activity 4: Conditional (Ternary) Operator


// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let number1 = 82;
console.log(number1 % 2 == 0? "even" : "odd");


// Activity 5: Combining Conditions


// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the
// result to the console.

year = 2020;
if((year%4===0 && year%100!==0) || year%400===0){
    console.log("year is leap year");
}
else{console.log("Not leap year");
=======
// Day 3: Control Structures


// Tasks/Activities:




// Activity 1: If-Else Statements


// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = 12;
if(num > 0){
    console.log(num + " number is +ve");
}else if(num < 0){
    console.log(num + " number is -ve");
}else{
    console.log(num + " number is 0");
}

// • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
age = 18;
if(age >= 18){
    console.log(age + " You are eligible for Vote");
}else if(age < 18 && age >0){
    console.log(age + " You are not eligible for Vote");
}else{
    console.log(age + " Invalid age");
}


// Activity 2: Nested If-Else Statements


// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.
a = 99; b = 77; c = 11;
if(a>b && a>c){
    console.log(a + " is largest no.");
}else if(b>a && b>c){
    console.log(b + " is largest no.");
}else{
    console.log(c + " is largest no.");
}


// Activity 3: Switch Case


// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day =6;

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Sturday");
        break;

    default:
        console.log("Please input no. in range of 1-7");
        break;
}

// • Task 5: Write a program that uses a switch case to assign a grade (A', 'B', 'C', 'D', 'E) based on a score and log the grade to the console.
let score=66;
switch (true) {
    case (score >=90):
        console.log("Grade A");
        break;
    case (score >=80 && score <90):
        console.log("Grade B");
        break;
    case (score >=70 && score < 80):
        console.log("Grade C");
        break;
    case (score >=50 && score < 70):
        console.log("Grade D");
        break;
    case (score >=30 && score < 50):
        console.log("Grade E");
        break;

    default:
        console.log("Please input no. in range of 0-100");
        break;
}


// Activity 4: Conditional (Ternary) Operator


// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let number1 = 82;
console.log(number1 % 2 == 0? "even" : "odd");


// Activity 5: Combining Conditions


// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the
// result to the console.

year = 2020;
if((year%4===0 && year%100!==0) || year%400===0){
    console.log("year is leap year");
}
else{console.log("Not leap year");
>>>>>>> e46497a392363f9d9d0129d0021ae42c2c8d76bf
}