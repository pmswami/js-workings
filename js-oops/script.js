'use strict';
// OOP is programming paradigm to write and oranize code
// all related data and method are into one class
// Objects contains data and methods
// Objects are created from classes
// Classes are blueprints for creating objects
// Classes are used to define properties and methods
// Classes are used to create objects
// Classes are used to define the structure of objects
// Classes are used to define the behavior of objects
// OOP is used to remove spaghetti code
// OOP is used to make code more modular
// OOP is used to make code more reusable
// OOP is used to make code more maintainable
// OOP is used to make code more readable
// OOP is used to make code more efficient
// OOP is used to make code more scalable
// OOP is used to make code more secure

// Fundamental Principles of OOP
// 1. Abstraction -> Hiding the details which dont matter to the user
// 2. Encapsulation -> Keeping some properties private inside the class, which cant be accessed from outside of the class
// 3. Inheritance -> One class can inherit the properties of other class.
// 4. Polymorphism -> A child can overwrite a method inherited from parent class

// All objects in JS are linked to a prototype object
// Prototypal Inheritance -> The prototype contains methods (behavior) hat are accessible to all objects linked to that prototype
// Behavior is delegated to the linked prototype object
// All objects in JS are linked to a prototype object

// For more info, visit official MDN documents https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

// const Person = function (firstName, birthYear) {
//     // console.log(firstName, birthYear);
//     // console.log(this);
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     // By default, constructor returns this object

//     // not recommended from performace point of view
//     // this.calcAge = function () {
//     //     console.log(2037 - this.birthYear);
//     // };
// };
// const jonas = new Person("jonas", 1991);
// // console.log(jonas);

// // Process followed as below,
// // 1. New {} is created
// // 2. function is called, this={}
// // 3. {} is linked to a prototype
// // 4. function automatically return {}

// const matilda = new Person("Matilda", 2017);
// // console.log(matilda);

// Object created from class is technically called instance
// Class is a blueprint for creating instances

// console.log(jonas instanceof Person);
// console.log(matilda instanceof Person);

// Prototypes
// Person.prototype.calAge = function () {
//     console.log(2037 - this.birthYear);
// };
// console.log(Person.prototype);
// console.log(Person);


// // Calling methods which are attached to prototypes
// jonas.calAge();
// matilda.calAge();

// // console.log(jonas.__proto__);
// // console.log(Person.prototype);
// // console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person));

// Adding properties on prototypes
// These properties are common to all instances created
// These properties are not directly attached to each instances, instead they will be inherited from its prototype
// Person.prototype.species = "Homo Sapiens";


// // Check particular property availibility
// console.log("Properties Check");
// console.log(jonas.hasOwnProperty("firstName"));
// console.log(jonas.hasOwnProperty("species"));


// Prototype in JS is itself a object of className.prototype
// whenever a new object is created, JS doesnt create all properties annd methods of the class for the new object. Instead is only creates the new object with properties and mehods which are defined inside the class defination. JS only links all remaining properties and methods to objects from its prototype.
// Prototype chain is series between objects, linked through prototypes.
// Scope chain also works similarly as prtotype chain.
// In prototype chain., whenever JS cant find find a particular property/method on object, then it goes to its prototype to get that property/method. Similarly in scope chain, if JS cant find any variable in that scope then it find it inside scope of its parent.


// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);
// console.log(Person.prototype.constructor); // points back to class itself
// console.log("Array function\n");
// const arr = [3, 6, 5, 7, 8, 23, 34, 8];
// console.log(arr.__proto__);
// console.log(arr.__proto__ == Array.prototype); //true
// console.log(arr.__proto__.__proto__);

// For more info on Arrays in JS, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// If we add any new method on prototype then all the objects/instances will automatically have access(by inheritance property) to te new method

// Function in JS is itself an prototype

// // _______________ CHALLENGE #1 ________________________
// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}`);
//     // return this
// };

// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}`);
// };

// const bmw = new Car("BMW", 120);
// const mercedez = new Car("Mercedez", 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

// Classes in JS are not new concept, they are just snactic sugar over prototypal inheritance

// // Class expression
// const PersonCl = class{}

//class declaration
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // Methods will e automatically added to prototype
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    };
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl);

// Can also add methods manually to the classes outside the class defination
PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.firstName}`);
};
jessica.greet();

// 1. Classes are not hoisted. Means they cannot be used before heir declaration
// 2. Classes are first class citizens. Means classes can be returned from another class
// 3. By default, classes work in strict mode always























