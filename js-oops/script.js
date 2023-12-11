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

const Person = function (firstName, birthYear) {
    // console.log(firstName, birthYear);
    // console.log(this);
    this.firstName = firstName;
    this.birthYear = birthYear;
    // By default, constructor returns this object

    // not recommended from performace point of view
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // };
};
const jonas = new Person("jonas", 1991);
// console.log(jonas);

// Process followed as below,
// 1. New {} is created
// 2. function is called, this={}
// 3. {} is linked to a prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 2017);
// console.log(matilda);

// Object created from class is technically called instance
// Class is a blueprint for creating instances

// console.log(jonas instanceof Person);
// console.log(matilda instanceof Person);

// Prototypes
Person.prototype.calAge = function () {
    console.log(2037 - this.birthYear);
};
// console.log(Person.prototype);
// console.log(Person);

jonas.calAge();
matilda.calAge();

// console.log(jonas.__proto__);
// console.log(Person.prototype);
// console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

// Adding properties on prototypes
// These properties are common to all instances created
// These properties are not directly attached to each instances, instead they will be inherited from its prototype
Person.prototype.species = "Homo Sapiens";


// Check particular property availibility
console.log("Properties Check");
console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));


