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
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};
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

//Default Values
const [p,q,r] = [10,11]
console.log("without default values",p,q,r)
const [x=1,y=1,z=1]=[10,11]
console.log("After destructuring", x, y, z)
