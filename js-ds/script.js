'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 0, mainIndex = 0, address, time = 20.00 }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${address} at ${time} local time zone`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your Pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  }
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//______________________ Challenge #1 _________________________________________
const [players1, players2] = game.players;
console.log("Players1:", players1, "\nPlayers2:", players2);
const [gk, ...fieldPlayers] = players1;
console.log("Goalkeeper:", gk, "\nField Players:", fieldPlayers);
const allPlayers = [...players1, ...players2];
console.log("All Players:", allPlayers);
const playersFinal = [...players1, "Thiago", "Coutinho", "Periscic"];
console.log("Players Final:", playersFinal);
const { odds: { team1, x: draw, team2 } } = game;
console.log("Team1:", team1, "\nDraw:", draw, "\nTeam2:", team2);
const printGoals = function (...players) {
  // console.log(players);
  console.log(`${players.length} goals were scored.`);
};
printGoals("SwamFire", "EchoEcho", "XLR8", "HeatBlast");
printGoals("SwamFire", "EchoEcho", "HeatBlast");
printGoals("SwamFire", "EchoEcho");
printGoals(...game.scored);
team1 < team2 && console.log("Team 1 is more likely to win!");
team2 < team1 && console.log("Team 2 is more likely to win!");

// //________________ Logical Assignment Operator ____________________________
// const rest1 = {
//   name: "SwamFire",
//   numGuests: 0,
// };
// const rest2 = {
//   name: "HeatBlast",
//   owner: "Ben10",
// };
// // console.log(rest1);
// // console.log(rest2);
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;
// rest1.numGuests ??= 10; //Nullish coalesce operator
// rest2.numGuests ??= 10;
// rest1.owner &&= "Anonymous";
// rest2.owner &&= "Anonymous";
// console.log("Rest1", rest1);
// console.log("Rest2", rest2);

// // ___________________ NULISH COALESCING OPERATOR _______________________
// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log("Guests1", guests1);
// //Nullish coalesce operator only consider null and undefined (NOT 0 and "") as falsy values
// const guestCorrrect = restaurant.numGuests ?? 10;
// console.log("Correct Guests", guestCorrrect);

//______________________ AND OPERATOR ____________________________
// console.log(0 && "Jonas"); //0
// console.log(7 && "Jonas"); //Jonas
// console.log("Hello" && 23 && null && "Jonas");//null
// if (restaurant.orderPizza) {
//   restaurant.orderPizza("Mushrooms", "Spinach");
// }
// restaurant.orderPizza && restaurant.orderPizza("Mushrooms", "Spinach");

// ________________ OR Operator __________________________
// Can use any datatypes and can return any datatypes
// // Uses short circuiting
// console.log(3 || "jonas");
// console.log("" || "Jonas");
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || "" || "Hello" || null || 23);
// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log("Guests1", guests1);
// const guests2 = restaurant.numGuests || 10;
// console.log("Guests2", guests2);

//___________________REST OPERATOR __________________________________
// restaurant.orderPizza("Spinach", "Mushrooms", "Onions", "Oliver");
// restaurant.orderPizza("Mushrooms");
//REST Operator
// const arr = [1, 2, 3, 4, 5];
// const [, , ...newArr] = arr;
// console.log("New Arr", newArr);
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// const [firstItem, secondItem, ...otherItems] = menu;
// console.log(firstItem, secondItem, otherItems);
// REST operator does not consider skipped items/elements
// In a single expression, there should be only one REST operator
// In a expression, REST should always be at last
// // for objects, no ordering will be there
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays, sat);
// const add = function (...numbers) {
//   // console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) { sum += numbers[i]; }
//   return sum;
// };
// console.log(add(2, 3));
// console.log(add(2, 3, 4));
// console.log(add(2, 3, 4, 5));
// const x = [10, 20, 30];
// console.log(add(...x));
// //Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// console.log(restaurantCopy);
// restaurantCopy.name = "SwamFire";
// console.log(restaurant.name);
// console.log(restaurantCopy.name);
// const ingredients = [
//   prompt("Let's Make Pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?")
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

//------------------------SPREAD Operator -------------------------------
// //Spread operator
// const arr = [1, 2, 3];
// const arrNew = [...arr, 8, 9];
// const arrNew1 = [10, 11, ...arr];
// console.log(arrNew);
// console.log(arrNew1);
// console.log(...arr);
// console.log(...arrNew);
// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log("New Menu:", newMenu, "\nRestraurent Menu:", restaurant.mainMenu);

// //Shallow copy of Array
// const newMenuCopy = [...restaurant.mainMenu];
// console.log("New Menu Copy", newMenuCopy);
// console.log("Restaurent Menu:", restaurant.mainMenu);

// const str = "Jonas";
// const newStr = [...str];
// console.log(newStr, typeof (newStr));
// const newStr1 = [...str, " ", "S."];
// console.log(newStr1);
// console.log(typeof (newStr));

// //Join 2 Arrays
// const fullmenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log("Full Menu", fullmenu);

// restaurant.orderDelivery({
//   starterIndex: 2,
//   mainIndex: 1,
//   address: "SwamFire Address",
//   time: 22,
// });
// const {name, openingHours, categories } = restaurant
// console.log(name, openingHours, categories)
// const {name: restaurantName, openingHours:hours, categories:tags} = restaurant
// console.log(restaurantName, hours, tags)
// const { menu = [], starterMenu:starters=[]} = restaurant
// console.log("Menu",menu, "\nStarters", starters)

// let a = 111
// let b=123
// console.log("Before destructuring", a,b);
// const obj = {a:23, b:3, c:10};
// ({a, b}=obj);
// console.log("After destructuring",a,b);

// // Destructuring nested objects
// const { fri: { open: o, close: c } } = restaurant.openingHours;
// // console.log("Fri object",fri)
// // console.log("Open",open, "Close",close)
// console.log("Open", o, "Close", c);

// // console.log(restaurant)
// const arr = [1,2,3 ]
// const a=arr[0]
// const b=arr[1]
// const c=arr[2]
// console.log("without destructuring",a,b,c)
// const [x,y,z]=arr
// console.log('with destructuring ', x , y , z )
// const [first, second]=restaurant.categories
// console.log(first, second)
// const [firstNew, ,third]=restaurant.categories
// console.log(firstNew, third)

// //Variable reversal
// let [main, secondary] = restaurant.categories
// console.log("Before destructuring",main,secondary);
// [secondary, main]=[main, secondary]
// console.log("after destructuring ", main, secondary)

// //Nested destructuring
// const [starter, main] = restaurant.order(2,0)
// console.log(`Starter Menu : ${starter} \nMain Menu:${main}`)
// const nested = [2,4,[5,6]]
// // let [i,,j] =nested;
// // console.log(i, j)
// const [i,,[j,k]] = nested
// console.log(i, j,k)

// //Default Values
// const [p,q,r] = [10,11]
// console.log("without default values",p,q,r)
// const [x=1,y=1,z=1]=[10,11]
// console.log("After destructuring", x, y, z)

