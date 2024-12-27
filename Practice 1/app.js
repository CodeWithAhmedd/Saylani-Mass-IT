// Question 2

// let a = 2
// let b = 1

// console.log(--a - --b + ++b + b--)

// document.write("Answer 3")

// console.log(a)
// console.log(b)

// Question 3
//  let name = prompt("Enter your name:");

//  alert("Hello, " + name + "! Welcome!");
//  console.log("Hello, " + name + "! Welcome!");

 // Question 6

 let subject1 = prompt("Enter Your 1st Subject:")
 let subject2 = prompt("Enter Your 2nd Subject:")
 let subject3 = prompt("Enter Your 3rd Subject:")

 const totalMark = 100

document.write("<br>Maths   : " + subject1 )
document.write("<br>English  :" + subject2  )
document.write("<br> Urdu   :" + subject3  )
let total = Number(subject1) + Number(subject2) + Number(subject3)
document.write("<br> Total Marks: " + total )
document.write("<br>Percentage: " + total * 100 / 300  + "%")

