let money = 100;
let taka = 111;
const drinks = money > 100? 'biriyani' : 'water';
// console.log(drinks)
const balance = (money >= 100 && taka > 100 )?'cock':'ruti';
// console.log(balance)

// number to string
const number = 99;
const total = number + '';
// console.log(typeof total)

// String to number

const number1 = '3';
const result2 = +number1;
// console.log(typeof result2)

let isActive = true;
const displayUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive ? displayUser() : hi node shortcut.jsdeUser()
// isActive && hideUser();
// isActive || displayUser();

// toggle boleen
isActive =!isActive;
console.log(isActive)
