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


// let  sentence = "I am learning JavaScript";
// let newStr =sentence.split('')

// for (let i = 0; i < newStr.length; i++) {
//     if(newStr[i]=== " "){
//         newStr[i]= "-"
//     }
    
// }
// console.log(newStr.join(''));
////////////////////////////////////////
///////////////////////////////////////////////////////

//26.11.2024

// Sum of Elements
// Given an array of numbers [1, 2, 3, 4, 5, 6]:
// Write a program to find the sum of all the elements in the array using only a for loop and the array.

// let numArr =[1, 2, 3, 4, 5, 6]
// let summ =0
// for (let i = 0; i < numArr.length; i++) {
//         summ =summ+numArr[i]
    
// }
// console.log(summ);
/////////////////////////////////
//////////////////////////////////////////////

// Remove Duplicates
// Given an array [1, 2, 2, 3, 4, 4, 5]:
// Write a program to create a new array where duplicate elements are removed.
// The result should be [1, 2, 3, 4, 5].

// let arr =[1, 2, 2, 3, 4, 4, 5]
// let newArr=[]
// debugger
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] !== arr[i+1]){
//     newArr.push(arr[i])
// }
// }

// console.log(newArr);
///////////////////////////////////////
//////////////////////////////////////////////

// Longest Text
// Given an array of strings ["React", "JavaScript", "Redux", "PHP", "C#"]:
// Write a program to find the longest word in the array.
// Solution in JavaScript using only for loop and arrays:

// let arr =["React", "JavaScript", "Redux", "PHP", "C#"]
// let maxLength =arr[0].length
// for (let i = 0; i < arr.length; i++) {

//         for (let j = 0; j < arr[i].length; j++) {
//                 if(j>maxLength){
//                     maxLength =j
//                     console.log(arr[i]);
                    
//                 }
            
//         }
        
        
    
// }