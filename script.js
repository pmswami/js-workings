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


// //Example
// console.log(numProducts)
// if(!numProducts) deleteShoppingCart()
// var numProducts = 10
// function deleteShoppingCart(){
//     console.log("Deleted All products")
// }

// var x=1
// let y=2
// const z=3

// console.log(x === window.x)
// console.log(y===window.y)
// console.log(z===window.z)


// This keyword
// console.log(this)
// // inside normal function 'this' keyword will be undefined
// const calcAge = function (birthYear){
//     console.log(2037-birthYear)
//     console.log(this)
// }
// calcAge(1990)
// // Arrow function do not have its own 'this' keyword. Hence it uses its parent 'this' keyword
// const calcAgeArrow = (birthYear) => {
//     console.log(2037-birthYear)
//     console.log(this)
// }
// // calcAgeArrow(1990)

// const jonas = {
//     year: 1990,
//     calcAge: function(){
//         console.log(this)
//         console.log(2037-this.year)
//         return true
//     }
// }
// // console.log(jonas.calcAge())

// const matilda = {
//     year:2020
// }
// matilda.calcAge = jonas.calcAge
// console.log(matilda.calcAge())
// var firstName = "XLR8"
// const jonas = {
//     year: 1990,
//     firstname: "SwamFire",
//     calcAge: function(){
//         console.log(this)
//         console.log(2037-this.year)
//         return true
//     },
//     greet: function(){
//         console.log(`Hey ${this.firstname}`)
//     },
//     //return undefined, coz window object does not have firstname variable
//     // if this is used inside arrow function then it considers this object of its parent
//     // greet: ()=>{
//     //     console.log("inside greet",this)
//     //     console.log(`Hey ${this.firstName}`)
//     //
//     // }
// }
// jonas.greet()


// const jonas = {
//     year: 1990,
//     firstname: "SwamFire",

//     // Regular functions dont have access to this keyword inside another function
//     // calcAge: function(){
//     //     const self = this
//     //     const isMillenial = function(){
//     //         console.log(self)
//     //         // console.log(this) //
//     //         console.log(self.year>=1981 && self.year<=1996)
//     //     }
//     //     isMillenial()
//     // }

//     //Arrow functions use this keyword of its parent object
//     calcAge: function(){
//         const isMillenial = ()=>{
//             console.log(this)
//             console.log(this.year>=1981 && this.year<=1996)
//         }
//         isMillenial()
//     }
// }
// jonas.calcAge()

// const addExpr = function(a, b){
//     console.log(arguments)
//     return a+b
// }

// var addArrow=(a,b)=>{
//     console.log(arguments)
//     return a+b
// }
// console.log(addExpr(2, 3,4 ,5))
// // console.log(addArrow(2, 3,4 ,5))

// //Primitive type
// let age=30
// let oldAge = age
// age = 31
// console.log("Old Age:",oldAge,"New Age:",age)

// //Reference Type
// const me = {
//     name: "SwamFire",
//     age: 30
// }

// const friend = me
// friend.age = 27
// console.log("Friend:", friend)
// console.log("Me", me)

// //Primitive types
// let lastName = "XLR8"
// let oldLastName = lastName
// lastName = "EchoEcho"
// // console.log('Last Name:', lastName,'Old LastName:', oldLastName)

// //Reference Types
// const jessica = {
//     firstName: "Jessica",
//     lastName: "Williams",
//     age:27,
//     family: ["Alice", "Bob"],
// }
// const marriedJessica = jessica
// // marriedJessica.lastName = "Davis"
// console.log("Before marriage:", jessica, "\nMarried Jessica:", marriedJessica)
// // marriedJessica = {}

// //Copying objects
// const jessicaCopy = Object.assign({}, jessica) //Shallow Copy
// const jessicaCopyNew = Object.assign({}, jessica)
// jessicaCopy.lastName = "Davis"
// jessicaCopyNew.family.push("Mary")
// jessicaCopyNew.family.push("John")
// console.log("Before marriage:", jessica, "\nMarried Jessica:", jessicaCopy)
// console.log("Before marriage:", jessica, "\nMarried Jessica:", jessicaCopyNew)


