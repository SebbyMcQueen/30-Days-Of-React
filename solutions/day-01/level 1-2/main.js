// #1
import countries from './countries.js';
import webTechs from './web_techs.js';

console.log('Countries:', countries);
console.log('Web Technologies:', webTechs);

// #2
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[.,]/g, '').split(' ');
console.log(words)
console.log(words.length)

// #3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
let itemToCheck = 'Meat';
if (!shoppingCart.includes(itemToCheck)) {
    shoppingCart.unshift(itemToCheck);
    }

itemToCheck = 'Sugar';
if (!shoppingCart.includes(itemToCheck)) {
    shoppingCart.push(itemToCheck);
}

itemToCheck = 'Honey';
if (shoppingCart.includes(itemToCheck)) {
    shoppingCart.splice(shoppingCart.indexOf(itemToCheck), 1);
}

itemToCheck = 'Tea';
if (shoppingCart.includes(itemToCheck)) {
    shoppingCart[shoppingCart.indexOf(itemToCheck)] = 'Green Tea';
}

console.log(shoppingCart);

// #4
let ethiopia = 'Ethiopia';
if (countries.includes(ethiopia)) {
    console.log(ethiopia.toUpperCase());
} else {
    countries.push(ethiopia);
}

console.log(countries);

// #5
let sass = 'Sass';
if (webTechs.includes(sass)) {
    console.log('Sass is a CSS rpeprocess');
} else {
    webTechs.push(sass);
    console.log(webTechs);
}

// #6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)

//level 1-3

// #1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())
console.log('Min age:', Math.min(...ages))
console.log('Max age:', Math.max(...ages))
const medianAge = ages[Math.floor(ages.length / 2)];
console.log('Median age:', medianAge);
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;
console.log('Average age:', averageAge);
const range = Math.max(...ages) - Math.min(...ages);
console.log('Range:', range);

// #2
console.log(countries.slice(0, 10));

// #3
console.log(countries[Math.floor(countries.length / 2)])

// #4
const arr1 = countries.slice(0, Math.floor(countries.length / 2));
const arr2 = countries.slice(Math.floor(countries.length / 2), countries.length);