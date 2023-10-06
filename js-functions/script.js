'use strict';

(function () {
    const header = document.querySelector("h1");
    header.style.color = "red";
    document.querySelector("body").addEventListener("click", function () {
        header.style.color = "blue";
    });
})();

// //_____________________ CLOSURES _______________________________________
// // a function has access to variable environment of the execution context in which it was created
// // Closures: VE attached to the function, exactly as it was at the time and place the function was created.
// // a closure is the closed-over variable environment of the execution context in which a function was created, even after that execution contetx is gone.
// // A closure gives a function access to all the variables of its parent function even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout the time.
// // A closure makes sure that a function doesnt loose connecton to the variables that existed at the functions birth place.
// const secureBooking = function () {
//     let passengerCount = 0;
//     return function () {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     };
// };
// const booker = secureBooking();
// booker();
// booker();
// // booker();
// console.dir(booker);

// //Example #1
// let f;
// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     };
// };
// const h = function () {
//     const b = 50;
//     f = function () {
//         console.log(b * 2);
//     };
// };
// g();
// f();
// h();
// f();
// console.dir(f);

// // Example #2
// const boardPassengers = function (n, wait) {
//     const perGroup = n / 3;
//     setTimeout(function () {
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     }, wait * 1000);
//     console.log(`Will start boarding in ${wait} seconds`);
// };
// const perGroup = 1000;
// boardPassengers(180, 3);

// // setTimeout(function () { console.log("TIMER"); }, 1000);

// //_____________ Immediately invoked funcion expression ___________________
// (function () {
//     console.log("This will never run again ");
// })();
// (() => {
//     console.log("This will also never run again ");
// })();

// // ______________________ Challenge #1 ________________________________
// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         const answer = Number(prompt(`${this.question}\n${this.options.join("\n")}`));
//         // console.log(answer);
//         typeof answer == "number" && answer < this.answers.length && this.answers[answer]++;
//         // console.log(this.answers);
//         this.displayResults();
//         this.displayResults("string");
//     },
//     displayResults(type = "array") {
//         if (type === "array") {
//             console.log(this.answers);
//         }
//         else if (type == "string") {
//             console.log(`Poll results are ${this.answers.join(", ")}`);
//         }
//     },
// };
// // console.log(poll.registerNewAnswer());
// document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll));



// //_____________________ CALL and APPLY Methods __________________________________

// const lufthansa = {
//     airline: "Lufthansa",
//     iataCode: "LH",
//     bookings: [],
//     book: function (flightNum, name) {
//         console.log(`${name} has booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//     }
// };
// lufthansa.book(123, "SwamFire");
// lufthansa.book(456, "XLR8");
// // console.log(lufthansa);
// const eurowings = {
//     airline: "Eurowings",
//     iataCode: "EW",
//     bookings: [],
// };
// const book = lufthansa.book;
// book.call(eurowings, 123, "EchoEcho");
// // console.log(eurowings);
// book.call(lufthansa, 123, "EchoEcho");
// // console.log(lufthansa);

// const flightData = [789, "HeatBlast"];
// book.apply(eurowings, flightData);
// // console.log(eurowings);
// book.call(lufthansa, ...flightData);
// // console.log(lufthansa);

// const bookEW = book.bind(eurowings);
// bookEW(123, "FourArms");
// bookEW(123, "CannonBolt");
// // console.log(eurowings);
// const bookLH = book.bind(lufthansa);
// bookLH(347, "Ben10");
// // console.log(lufthansa);
// const bookEW23 = book.bind(eurowings, 23); // called as partial application
// bookEW23("Upchuck");
// // console.log(eurowings);

// lufthansa.planes = 300;
// lufthansa.buyPlanes = function () {
//     // console.log(this);
//     this.planes++;
//     console.log(this.planes);
// };
// console.log(lufthansa);
// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlanes.bind(lufthansa));
// console.log(lufthansa);

// const addTax = (rate, value) => {
//     return value + value * rate;
// };
// console.log(addTax(.1, 200));
// // const addVAT = addTax.bind(null, 0.23); // Partial application
// // console.log(addVAT(100));

// const addVAT = (rate) => {
//     return (value) => {
//         return value + value * rate;
//     };
// };
// console.log(addVAT(.23)(100));
// console.log(addVAT(.23)(10));


// //_______________ Function returning other function ________________________
// // JS closures === Python decorators
// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };

// // const greet = (greeting) => {
// //   return (name) => {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet("Hey");
// greeterHey("SwamFire");
// greet("Hello")("XLR8");


// //____________________ Higher Order Functions __________________________________
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...rest] = str.split(" ");
//   return [first.toUpperCase(), ...rest].join(" ");
// };

// // higher order function
// const transformer = function (str, fn) {
//   console.log("Original string:", str);
//   console.log("Transformed string:", fn(str));
//   console.log("Transfomed by:", fn.name);
// };
// transformer("Javascript is the best!", upperFirstWord);
// transformer("Javascript is the best!", oneWord);
// // transformer("Javascript is the best!", upperFirstWord);
// const high5 = function () {
//   console.log("Hiii!");
// };
// document.body.addEventListener("click", high5);

// // Higher order funcion are used for abstraction
// ["SwamFIre", "EchoEcho", "XLR8"].forEach(high5);

// // First - class Functions
// // 1. can return functions from any functions;
// // 2. methods can be called on functions;
// // 3. functions are jsut another type of javascript objects;
// // 4. js functions are simply values;
// // 5. js treats functions as first - class citizens;

// // Higher Order Functions
// // 1. a function receives another function as input and return anotyher function\

// // JAVASCRIPT DOES NOT HAVE PASS BY REFERENCE FUNCTIONALITY

// // __________Function with default paramaters ____________________
// const bookings = [];
// const createBooking = function (filghtNo, numPassengers = 1, price = 199) {
//   // numPassengers = numPassengers || 1;
//   price = 199 * numPassengers;
//   const booking = {
//     filghtNo,
//     numPassengers,
//     price
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking("LMH123");
// createBooking("LMH123", 5, 1000);
// createBooking("LMH123", 5);