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


    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Methods will e automatically added to prototype
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    };

    // Getters and Setters
    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        // console.log(name);
        if (name.includes(" ")) {
            this._fullName = name;
        } else {
            alert("Given name is not a fullname");
        }
    }

    get fullName() {
        return this._fullName;
    }

    static hey() {
        console.log(`Hey there!`);
        console.log(this);
    }
}

// PersonCl.hey = function () {
//     console.log(`Hey there!`);
//     console.log(this);
// };
// PersonCl.hey();

const jessica = new PersonCl("Jessica Davis", 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.__proto__ === PersonCl);

// // // Can also add methods manually to the classes outside the class defination
// // PersonCl.prototype.greet = function () {
// //     console.log(`Hey ${this.firstName}`);
// // };
// jessica.greet();

// 1. Classes are not hoisted. Means they cannot be used before heir declaration
// 2. Classes are first class citizens. Means classes can be returned from another class
// 3. By default, classes work in strict mode always


// // ______________________ GETTERS and SETTERS _______________
// // Accessor properties -> getters and setters
// const account = {
//     owner: "Jonas",
//     movements: [200, 300, 400, 500],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },
//     set latest(mov) {
//         this.movements.push(mov);
//     }
// };
// console.log(account.latest);
// account.latest = 800;
// console.log(account.latest);
// console.log(jessica.age);

// const walter = new PersonCl("Walter", 1997)
// PersonCl.hey();

// // ______________________ Using Object.create Method ____________
// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = "Steven";
// steven.birthYear = 2002;
// steven.calcAge();

// // const car = Object.create(PersonProto);
// // car.make = "BMW";
// // console.log(car);
// // car.calcAge()

// // console.log(steven.__proto__ == PersonProto);
// // const sarah = Object.create(PersonProto);
// // sarah.init("Sara", 1990);
// // sarah.calcAge()


// // _________________________ CHALLENGE #2 ____________________________________
// class CarCl{
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     };
//     accelerate() {
//         this.speed += 10;
//         console.log(`${this.make} is going at ${this.speed}`);
//     };

//     brake() {
//         this.speed -= 5;
//         console.log(`${this.make} is going at ${this.speed}`);
//     }

//     get speedUS(){
//         return this.speed/1.6
//     }

//     set speedUS(speed){
//         this.speed = speed*1.6
//     }


// }

// // ___________________ Prototypal Inheritance _______________________
// // const ford = new CarCl("ford", 120)
// // console.log(ford)
// // console.log(ford.speedUS)
// // ford.accelerate()
// // ford.accelerate()
// // ford.brake()
// // console.log(ford.speedUS)
// // ford.speedUS=50
// // console.log(ford.speedUS)
// // console.log(ford)

// // 3 methods of Class declaration
//     // 1. Constructor function
//     // 2. ES6 Class syntax defination
//     // 3. Object.create()

// const Person = function (firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
// };
    
// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// };

// const Student = function(firstName, birthYear, course){
//     // this.firstName = firstName
//     // this.birthYear = birthYear
//     Person.call(this, firstName, birthYear)
//     this.course = course
// }

// // Whenever we link prototype then a new empty object is created. Hence if any links are joined before this may get nulled.
// //Linking prototypes
// Student.prototype = Object.create(Person.prototype)

// Student.prototype.introduce = function(){
//     console.log(`My name is ${this.firstName}, I study ${this.course}`)
// }

// const mike=  new Student("Mike", 2020, "Computer Science")
// mike.introduce()
// mike.calcAge()
// console.log(mike.__proto__)
// console.log(mike.__proto__.__proto__)

// console.log(mike instanceof Student)
// console.log(mike instanceof Person)
// console.log(mike instanceof Object)

// Student.prototype.constructor = Student
// console.dir(Student.prototype.constructor)

// _____________ CHALLENGE #3 ____________________________
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
    // return this
};
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
};
const EV = function(make, speed, charge){
    Car.call(this, make, speed)
    this.charge = charge
}
// Link the prototype
EV.prototype = Object.create(Car.prototype)
EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo
}
// override the accelerate method
EV.prototype.accelerate = function(){
    this.speed+=20
    this.charge-=1
    console.log(`${this.make} is going at speed of ${this.speed}km/h with charge of ${this.charge}`)
}
const tesla = new EV("Tesla", 120, 23)
console.log(tesla)
tesla.chargeBattery(90)
tesla.brake()
tesla.accelerate()
console.log(tesla)





