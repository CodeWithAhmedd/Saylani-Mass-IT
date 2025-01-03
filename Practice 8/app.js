// // // function xyz(b, c) { // parameters
// // //     let a = 10;
// // //     console.log(a+b+c); // 30
// // // }

// // // xyz(10,20); // arguments  


// // // _____________________________________________________________________________________


// // function xyz(b, c) { // parameters
// //     let a = 10;
// //    return a+b+c; // 30
// //    alert('hello'); // wont be executed because of return statement
// // }

// // let result = xyz(10,20); // arguments  
// // console.log('result '+result); // 30

// // _____________________________________________________________________________________


// function xyz(b, c, o) { // parameters
//     b = 20; // 20 will be used instead of 10 
//    if (o === '+') {
//        return b+c;
//    } else if (o === '-') {
//        return b-c;
//    } else if (o === '*') {
//        return b*c;
//    } else if (o === '/') {
//        return b/c;
//    } else {
//        return 'Invalid Operator';
//    }
// }
// let plus = xyz(10,20,'+');
// let minus = xyz(10,20,'-');
// let multiply = xyz(10,20,'*');
// let divide = xyz(10,20,'/');
// let invalid = xyz(10,20,'$');
// console.log('plus '+plus);
// console.log('minus '+minus);
// console.log('multiply '+multiply);
// console.log('divide '+divide);
// console.log('invalid '+invalid);

