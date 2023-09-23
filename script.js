'use strict';
// 3 types of scopes
//     1. Global scope
//     2. Functional scope
//     3. Block scope

// only let and const are block scope

function calcAge(birthYear){
    const age = 2037 - birthYear
    // console.log("First Name from function",firstName)
    // console.log(lastName)

    function printAge(){
        // Creating new varibale with same name as outer scope variable
        const firstName = "EchoEcho"
        const output = `${firstName}, you are ${age} years old, born in ${birthYear}`
        console.log(output)
        if(birthYear>=1981 && birthYear<=1996){
            var millenial = true
            const str = `${firstName} you are millenial`
            console.log(str)
            function add(a, b){
                return a+ b
            }
        }
        // console.log(millenial)
        // console.log(add(3, 4))
    }
    // console.log(millenial)
    printAge()
    return age
}

const firstName = "SwamFire"
calcAge(1990)
// console.log("first name", firstName)