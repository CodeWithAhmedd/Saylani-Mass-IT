// ''.charCodeAt()

let useeInput= prompt("enter your character")
let charCode = useeInput.charCodeAt();
console.log(charCode);
if (charCode >= 65 && charCode <= 90) {
    console.log("upper case");
    }



    // Password
let pass = "Hello123";
let userInput = prompt("enter your character");
if (userInput === pass) {
    alert("correct");
    console.log("correct")
    } else {
        alert("incorrect");
        console.log("incorrect");
        }
        // 2nd way

        let city = prompt("enter your city");
        let age = prompt("enter your age");
        let exp = prompt("enter your exp");

        if (city === "Karachi") {
            if (age >= 18 && age <= 65) {
                if (exp >= 1 && exp <= 10) {
                    console.log("you are eligible");
                    }
                    else {
                        console.log("you are not eligible");
                        }
                        }
                    }