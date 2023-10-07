'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  // console.log(movements);
  containerMovements.innerHTML = "";
  movements.forEach((element, index) => {
    const type = element > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
          <div class="movements__value">${element}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
    // containerMovements.insertAdjacentHTML("beforeend", html);
  });
};
displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


// let arr = ["a", "b", "c", "d", "e"];
// // Slice method
// // console.log("Array Slice:", arr.slice(2)); //Array Slice
// // console.log("Array Slice:", arr.slice(2, 4)); //Array Slice
// // console.log("Array Slice:", arr.slice(-2, -1));// last index is exclusive
// // console.log(arr[2]);

// // Splice method => original array is mutated
// // console.log(arr.splice(2, 3));
// console.log(arr);
// console.log(arr.reverse());
// let arr2 = ["x", "y", "z"];

// // array concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //join method
// console.log(letters.join("-"));


// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// //get last element of array
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// console.log("Swamfire".at(-1));
// console.log("Swamfire".at(0));

// //______________________________ forEach loop ___________________________________

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
// // for (const trans of movements) {
// //   const output = trans > 0 ? `You deposited ${trans}` : `You withdrawn ${trans}`;
// //   console.log(output);
// // }

// // forEach loop of arrays
// // movements.forEach((trans) => {
// //   const output = trans > 0 ? `You deposited ${trans}` : `You withdrawn ${trans}`;
// //   console.log(output);
// // });

// // movements.forEach(function(trans) {
// //   const output = trans > 0 ? `You deposited ${trans}` : `You withdrawn ${trans}`;
// //   console.log(output);
// // });

// // order of arguments are fixed
// // continue, break, exit() keywords dont work for forEach loop
// movements.forEach(function (trans, index, array) {
//   console.log(index);
//   const output = trans > 0 ? `You deposited ${trans}` : `You withdrawn ${trans}`;
//   console.log(output);
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// console.log(currencies);
// // currencies.forEach(function (value, key, map) {
// //   console.log(`${key}: ${value}`);
// // });

// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// const uniqueCurrencies = new Set(["INR", "USD", "EUR", "GBP", "INR"]);
// console.log(uniqueCurrencies);
// // Sets dont have keys, values pairs
// uniqueCurrencies.forEach((value, key, set) => {
//   console.log(`Set:${set}\t${key}:${value}`);
// });

