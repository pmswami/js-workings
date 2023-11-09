'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2023-11-06T21:31:17.178Z',
    '2023-11-07T07:42:02.383Z',
    '2023-11-06T12:15:04.904Z',
    '2023-11-05T10:17:24.185Z',
    '2023-11-02T14:11:59.604Z',
    '2023-05-27T17:01:17.194Z',
    '2023-07-11T23:36:17.929Z',
    '2023-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (day1, day2) => Math.round(Math.abs((day2 - day1) / (1000 * 60 * 60 * 24)));
  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} Days Ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  };
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency', currency: currency, minimumFractionDigits: 2
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movements = acc.movements;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    let displayDate = new Date(acc.movementsDates[i]);
    displayDate = formatMovementDate(displayDate, acc.locale);
    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE LOGIN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

//current date
const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = now.getHours();
const minute = now.getMinutes();
labelDate.textContent = `${day}/${month}/${year} ${hour}:${minute}`;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
      }`;
    containerApp.style.opacity = 100;
    let displayDate = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      day: 'numeric',
      // month: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long'
    };
    const locale = navigator.language;
    console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(displayDate);

    // let displayDate = new Date();
    // const day = `${displayDate.getDate()}`.padStart(2, 0);
    // const month = `${displayDate.getMonth() + 1}`.padStart(2, 0);
    // const year = `${displayDate.getFullYear()}`.padStart(4, 0);
    // const hour = `${displayDate.getHours()}`.padStart(2, 0);
    // const minute = `${displayDate.getMinutes()}`.padStart(2, 0);
    // displayDate = `${day}/${month}/${year} ${hour}:${minute}`;
    // labelDate.textContent = displayDate;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add Transfer dates
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toDateString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// console.log(23 === 23.0);

// // Conversion
// console.log(Number('23'));
// console.log(+'23');

// // Parsing
// console.log(Number.parseInt("23px", 10));
// console.log(Number.parseInt("rx23", 10));
// console.log(Number.parseInt(8, 10));

// console.log(Number.parseInt('2.5rem'));
// console.log(Number.parseFloat('2.5rem'));

// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(NaN));

// console.log(23 / 0);
// console.log(Number.isFinite(23 / 0));
// console.log(Number.isFinite('12'));
// console.log(Number.isFinite(23));



// // ______________________ Math Functions __________________________

// // Square root function
// console.log("SQRT function\n");
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// // Power function
// console.log("Power function\n");
// console.log(Math.pow(4, 2));
// console.log(4 ** 2);

// // Max function
// console.log("Max Function \n");
// console.log(Math.max(5, 2, 1, 4, 7, 8));

// // min function
// console.log("min function");
// console.log(Math.min(5, 2, 1, 4, 7, 8));

// // constants
// console.log("\nConstants");
// console.log(Math.PI);
// console.log(Math.E);

// //random number functions
// const randInt = Math.random();
// console.log("Random Numbers\n");
// console.log(randInt);
// console.log(Math.trunc(randInt * 10 + 1));
// console.log(Math.floor(randInt * 6) + 1);

// // Trunc methods
// console.log("Trunc method\n");
// console.log(Math.trunc(23.8)); //
// console.log(Math.round(23.3)); // rounds to nearest integer
// console.log(Math.round(23.8));  // rounds to nearest integer

// // ceil and floor methods
// console.log("Ceil and Floor methods\n");
// console.log(Math.ceil(23.6));
// console.log(Math.floor(23.6));
// console.log(Math.trunc(23.6));

// // rounding to decimal
// console.log("rounding decimal numbers\n");
// console.log((2.7).toFixed(0)); // returns string
// console.log((2.7).toFixed(1)); // returns string
// console.log((2.7).toFixed(3)); // returns string
// console.log(+(2.789423).toFixed(1)); // returns number



// // _____________________ Remainder Operator _______________________________

// console.log("remainder operator\n");
// let num1 = 10;
// let num2 = 3;
// console.log(`${num1} % ${num2}`);
// let remainder = num1 % num2;
// console.log(remainder);

// const isEven = num => num % 2 === 0 ? true : false;
// console.log(isEven(3));
// console.log(isEven(2));

// // console.log(document.querySelectorAll(".movements__row"));
// labelBalance.addEventListener("click", function () {
//   [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'white';
//     else row.style.backgroundColor = 'lightgrey';
//   });
// });



// // _____________________ Numeric Separator ________________________
// let num = 1_000_000;
// console.log(num);
// // numeric separators are only supported with numbers not with strings


// // _______________ BigInt _______________________________
// console.log("BigInt\n");
// console.log("MAX_INT", 2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);
// console.log(2 ** 53 + 5);
// console.log(87846298485291467685843281678n);
// const bigInt = BigInt(8784629878);
// console.log(bigInt);

// // BigInt operations
// console.log(10000n + 20000n);
// console.log(545754545414524545154n * 20000n);
// // console.log(8548264783691829367816387n + 23); //error
// console.log(8548264783691829367816387n + BigInt(23));

// // Exceptions
// console.log(20n > 15);
// console.log(20 === 20); // true
// console.log(20 === 20n); // false
// console.log(typeof (20n));
// console.log(20n == 20); // true

// // Math operaions like sqrt, does not work with bigint
// // console.log(Math.sqrt(16n)); // error
// console.log(207867579578567547589589554747454n + " is really a big integer");

// // Divisions
// console.log(10n / 3n); // cuts decimal part
// console.log(10 / 3);

// // _________________________ DATES and TIME _________________________________
// // Date creation
// let now = new Date();
// console.log(now);
// // convert string to date
// console.log(new Date("Oct 31 2023 16:49:03"));
// console.log(new Date("December 24, 2015"));
// console.log(account1.movementsDates[0]);
// console.log("converted into date", new Date(account1.movementsDates[0]));
// console.log(new Date(1995, 10, 27, 15, 15, 15));
// console.log(new Date(2020, 10, 31)); // auto corrected date( there is no 31st nov u JS converts it to next date)
// console.log(new Date(0)); // Considered as per unix start time
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); //uses millisecond value

// //working with dates
// console.log("Working with dates\n");
// const future = new Date(1995, 10, 27, 15, 15, 1);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getDate());
// console.log(future.getDay()); // returns day of the week
// console.log(future.getMonth());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString()); // returns date in iso format 2019-11-18T21:31:17.178Z
// console.log(future.getTime()); //returns time in milliseconds
// console.log(Date.now()); // returns current timestamp in milliseconds
// future.setFullYear(2020);
// console.log(future);

// // ______________________ DATES Operations _______________________________

// const future = new Date(1995, 10, 27, 15, 15, 1);
// console.log(future);

// console.log("Day difference\n");
// const calcDaysPassed = (day1, day2) => Math.abs((day2 - day1) / (1000 * 60 * 60 * 24));
// console.log(calcDaysPassed(new Date(2037, 3, 14, 10, 10), new Date(2037, 3, 15)));


// _______________ Format Regular Numbers ________________________________

console.log("Regular number formatter \n");
const num = 123456789.123;
const options = {
  style: "unit",
  unit: "mile-per-hour",
  // for more properties check out mdn documentation
};
console.log("US: ", new Intl.NumberFormat("en-US", options).format(num));
console.log("UK: ", new Intl.NumberFormat("en-UK", options).format(num));
console.log("Germany: ", new Intl.NumberFormat("de-DE").format(num));
console.log("Hindi: ", new Intl.NumberFormat("hi").format(num));
console.log("Marathi: ", new Intl.NumberFormat("mr").format(num));
console.log("Kannada: ", new Intl.NumberFormat("kn").format(num));
console.log(navigator.language, new Intl.NumberFormat(navigator.language).format(num));