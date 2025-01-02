// Question 1
let studentNames = [];

// Question 2
studentNames["student1"] = "Ahmed";
studentNames["student2"] = "Rehman";

// Question 3
let studentNames = ["Ahmed", "Rehman", "Anas", "Waqar"];
// studentName.push
studentNames.push("Ali");
studentNames.shift("Hassan");
studentNames.unshift("Hassan");
studentNames.pop("Hassan");

// splice will delete the element at the specified index
studentNames.splice(2, 1, "Hassan");


// Question 4
let numbers = [10, 20, 30, 40, 50];

// Question 5
let booleanArray = [true, false, true, false, true];

// Question 6
let mixedArray = [42, "Hello", true, 3.14, "World"];

// Question 7
let qualification = ["SSC", "HSC", "BSC", "BS", "PhD"];
document.write(`<h1>Qualification</h1></br>
    ${qualification[0]}
    `);

// Question 8
let studentNames = ["Ahmed", "Rehman", "Anas", "Waqar"];
let score = [85, 90, 78, 92];
let totalMarks = 100;
document.write(`Score of ${studentNames[0]} is ${score[0]} out of ${totalMarks}.`);