// PART 1: JavaScript Basics

// 1️ Variables and Data Types
let name = "John Doe"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let hobbies = ["Reading", "Coding", "Music"]; // Array
let person = { firstName: "John", lastName: "Doe", age: 25 }; // Object

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is Student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// 2️ Simple Calculator Function
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input! Please enter numbers.");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            alert("Invalid operation! Use +, -, *, /.");
            return;
    }

    alert(`Result: ${result}`);
}

// 3️ Function to Greet User
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

let userName = prompt("Enter your name:");
document.getElementById("greeting-message").textContent = greetUser(userName);

//  PART 2: Control Structures

// 4️ If Statement - Voting Eligibility
let userAge = parseInt(prompt("Enter your age:"));
let voteMessage = userAge >= 18 ? "You are eligible to vote!" : "You are not eligible to vote yet.";
document.getElementById("vote-message").textContent = voteMessage;

// 5️ Loop - Display Numbers 1 to 10
let numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

// PART 3: Introduction to the DOM

// 6️ Modify HTML Elements Using JavaScript
document.querySelector("h1").textContent = "JavaScript in Action!";

// 7️ Add New Content Dynamically
let dynamicDiv = document.getElementById("dynamic-content");
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicDiv.appendChild(newParagraph);
