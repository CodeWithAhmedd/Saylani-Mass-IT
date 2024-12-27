// Greater Number
let a = prompt("Enter January's Salary")
let b = prompt("Enter February's Salary")
let c = prompt("Enter March's Salary")

if (a > b && a > c) {
    alert("January's Salary is the greatest");
    } else if (b > a && b > c) {
        alert("February's Salary is the greatest");
        } else if (c > a && c > b) {
            alert("March's Salary is the greatest");
            } else {
                alert("All salaries are equal");
                }
 








// //  ____________________________________________________________________

// //  Currency Convertor
 let pkr = prompt("Enter Value")
 let Convertor = prompt("Enter Currency (USD, EUR, JPY, CNY, GBP)")
 if(Convertor === "USD"){
    let usd = pkr / 200
    alert(usd)
    } else if(Convertor === "EUR"){
        let eur = pkr / 220
        alert(eur)
        } else if(Convertor === "JPY"){
            let jpy = pkr / 220
            alert(jpy)
            } else if(Convertor === "CNY"){
                let cny = pkr / 15
                alert(cny)
            }


