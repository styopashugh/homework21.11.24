// Multiplication Table
// Write a for loop to print the multiplication table of a given number n (e.g., n = 5).

// let num =+prompt('add number')

// for (let index = 0; index <=10; index++) {
//     console.log(num *index);
    
    
// }
//////////////////////////////////////
///////////////////////////////////////////
// Homework 2 {
//     Write a for loop to replace all spaces in a string with hyphens (-).
//     Example Input:
//   let sentence = "I am learning JavaScript";
//      Expected Output: “I-am-learning-JavaScript”
// }


let  sentence = "I am learning JavaScript";
let newStr =sentence.split('')

for (let i = 0; i < newStr.length; i++) {
    if(newStr[i]=== " "){
        newStr[i]= "-"
    }
    
}
console.log(newStr.join(''));
