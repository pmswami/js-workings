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

const calcDisplaySummary = function (movements) {
  const incomes = movements.filter(function (mov) {
    return mov > 0;
  }).reduce(function (acc, current) {
    return acc + current;
  });
  labelSumIn.textContent = `${incomes} €`;

  const out = movements.filter(function (mov) {
    return mov < 0;
  }).reduce(function (acc, current) {
    return acc + current;
  });
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = movements.filter(function (mov) {
    return mov > 0;
  }).map(function (mov) {
    return mov * 1.2 / 100;
  }).filter(function (mov) {
    return mov >= 1;
  }).reduce(function (acc, current) {
    return acc + current;
  });
  labelSumInterest.textContent = `${interest} €`;
};
calcDisplaySummary(account1.movements);

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(" ").map(function (uname) {
      return uname[0];
    }).join("");
    // return username;
  });
};

// const user = 'Steven Thomas Williams';
// const user = 'Jessica Davis';
// const user = 'Jonas Schmedtmann';
// const user = 'Sarah Smith';
createUsername(accounts);
// console.log(accounts);

const calcPrintBalance = function (movements) {
  const balance = movements.reduce(function (accumulator, current) {
    return accumulator + current;
  });
  labelBalance.textContent = `${balance} €`;
};
calcPrintBalance(account1.movements);
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
// //   const output = trans > 0 ? `You deposited ${ trans; } ` : `You withdrawn ${ trans; } `;
// //   console.log(output);
// // }

// // forEach loop of arrays
// // movements.forEach((trans) => {
// //   const output = trans > 0 ? `You deposited ${ trans; } ` : `You withdrawn ${ trans; } `;
// //   console.log(output);
// // });

// // movements.forEach(function(trans) {
// //   const output = trans > 0 ? `You deposited ${ trans; } ` : `You withdrawn ${ trans; } `;
// //   console.log(output);
// // });

// // order of arguments are fixed
// // continue, break, exit() keywords dont work for forEach loop
// movements.forEach(function (trans, index, array) {
//   console.log(index);
//   const output = trans > 0 ? `You deposited ${ trans; } ` : `You withdrawn ${ trans; } `;
//   console.log(output);
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// console.log(currencies);
// // currencies.forEach(function (value, key, map) {
// //   console.log(`${ key; }: ${ value; } `);
// // });

// currencies.forEach((value, key, map) => {
//   console.log(`${ key; }: ${ value; } `);
// });

// const uniqueCurrencies = new Set(["INR", "USD", "EUR", "GBP", "INR"]);
// console.log(uniqueCurrencies);
// // Sets dont have keys, values pairs
// uniqueCurrencies.forEach((value, key, set) => {
//   console.log(`Set:${ set; } \t${ key; }:${ value; } `);
// });

// //___________________ Challenge #2 _____________________________________

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   console.log(dogsJuliaCorrected);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);
//   dogs.forEach(function (dog, i) {
//     if (dog > 3) {
//       console.log("Dog is adult");
//     }
//     else {
//       console.log("Still a puppy");
//     }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);


// //______________________________ MAP Method ___________________________

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;
// // const movementsUsd = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });
// const movementsUsd = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUsd);

// movements.map(function (value, key, arr) {
//   console.log(value, key, arr);
// });


// // _________________ FILTER Method _____________________________________

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
// const deposits = movements.filter(function (trans) {
//   return trans > 0;
// });
// console.log(deposits);

// const withdrawals = movements.filter((trans) => {
//   return trans < 0;
// });
// console.log(withdrawals);


// // ______________________ REDUCE Method ___________________________________

// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // const movements = [200, -200, 340, -300, -20, 50, 400, -460];
// const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];
// console.log(movements);
// const balance = movements.reduce(function (accumulator, current, index, arr) {
//   return accumulator + current;
// });

// console.log(balance);

// const maxMove = movements.reduce(function (acc, current) {
//   return current > acc ? current : acc;
// }, movements[0]);
// console.log(maxMove);

// const minMove = movements.reduce(function (acc, current) {
//   return current < acc ? current : acc;
// }, movements[0]);
// console.log(minMove);

// //_____________________ Challenge #2 ________________________________________
// const calcAverageHumanAge = function (ages) {
//   console.log(ages);
//   const humanAges = ages.map(function (age) {
//     return age <= 2 ? 2 * age : 16 + 4 * age;
//   });
//   const adultDogs = humanAges.filter(function (age) {
//     return age >= 18;
//   });
//   const average = adultDogs.reduce(function (acc, current) {
//     return acc + current;
//   }) / adultDogs.length;
//   console.log(humanAges);
//   console.log(adultDogs);
//   console.log(average);
// };

// const test1 = [5, 2, 4, 1, 15, 8, 3];
// const test2 = [16, 6, 10, 5, 6, 1, 4];
// calcAverageHumanAge(test1);

//____________________ CHAINING MAGIC _____________________________
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const movements = [200, -200, 340, -300, -20, 50, 400, -460];
// const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];
console.log(movements);
const eurToUsd = 1.1;
const totalDeposits = movements.filter(function (mov) {
  return mov > 0;
}).map(function (mov) {
  return mov * eurToUsd;
}).reduce(function (acc, current) {
  return acc + current;
});
console.log(totalDeposits);
;;;;
