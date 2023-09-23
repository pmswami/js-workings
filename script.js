'use strict';
// 3 types of scopes
//     1. Global scope
//     2. Functional scope
//     3. Block scope

// only let and const are block scope

// function calcAge(birthYear){
//     const age = 2037 - birthYear
//     // console.log("First Name from function",firstName)
//     // console.log(lastName)

//     function printAge(){
//         // Creating new varibale with same name as outer scope variable
//         const firstName = "EchoEcho"
//         const output = `${firstName}, you are ${age} years old, born in ${birthYear}`
//         console.log(output)
//         if(birthYear>=1981 && birthYear<=1996){
//             var millenial = true
//             const str = `${firstName} you are millenial`
//             console.log(str)
//             function add(a, b){
//                 return a+ b
//             }
//         }
//         // console.log(millenial)
//         // console.log(add(3, 4))
//     }
//     // console.log(millenial)
//     printAge()
//     return age
// }

// const firstName = "SwamFire"
// calcAge(1990)
// // console.log("first name", firstName)

// //Hoisting
// console.log(me)
// // console.log(job)
// console.log(country)
// var me  = "Jonas"
// let job = "Teacher"
// const year= 1990


// //Functions
// console.log(addDecl(2, 3))
// console.log(addExpr)
// // console.log(addExpr(2, 3))
// console.log(addArrow)
// console.log(addArrow(2, 3))
// function addDecl(a, b){
//     return a + b
// }

// // const addExpr = function(a, b){
// //     return a+b
// // }

// var addExpr = function(a, b){
//     return a+b
// }

// // const addArrow=(a,b)=>{
// //     return a+b
// // }

// var addArrow=(a,b)=>{
//     return a+b
// }


//Example
console.log(numProducts)
if(!numProducts) deleteShoppingCart()
var numProducts = 10
function deleteShoppingCart(){
    console.log("Deleted All products")
}

var x=1
let y=2
const z=3

console.log(x === window.x)
console.log(y===window.y)
console.log(z===window.z)