// ternary 
let money = 80;
let food = money > 100 ? 'biriyani' : 'cha biscuit';

let drink = (money >100 && myvar > 100) ? 'coke': 'filter water';


// variable number to string conversion
const num = 34;
const numString = num + '';
// variable string to number conversion
const input = '234';
const inputNumber = +input;
console.log(inputNumber);

// shortcut function calling 
const isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();

// isActive hole colbe otherwise not 
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed

isActive || showUser();

// toggle 
isActive = !isActive;