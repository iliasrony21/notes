//In JavaScript, destructuring allows you to unpack values from arrays or properties from objects into distinct variables. Here’s how it works for both arrays and objects:

// 1. Array Destructuring
// Array destructuring is used to unpack values from arrays into variables.
// Without destructuring
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// With destructuring
const [x, y, z] = arr;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 3

//You can also skip elements:
const [first, , third] = [10, 20, 30];
console.log(first); // 10
console.log(third); // 30

//You can assign default values:
const [p = 5, q = 10] = [1];
console.log(p); // 1
console.log(q); // 10 (default value)


//Object Destructuring
// Without destructuring
const person = { name: 'John', age: 30 };
const name2 = person.name;
const age2 = person.age;

// With destructuring
const { name3, age3 } = person;

console.log(name3); // John
console.log(age3);  // 30

// You can also use different variable names:

const { name: fullName, age: years } = person;
console.log(fullName); // John
console.log(years);    // 30

//Default values can be provided:

const { name, age, country = 'Unknown' } = { name: 'John', age: 30 };
console.log(country); // Unknown


// Nested Destructuring
// You can also destructure nested arrays and objects.

// Array Example:
const nestedArr = [1, [2, 3], 4];
const [as, [bs, cs], ds] = nestedArr;
console.log(bs); // 2


// Object Example:

const person2 = {
  name: 'John',
  address: {
    city: 'New York',
    zip: 10001
  }
};

const { address: { city, zip } } = person2;
console.log(city); // New York
console.log(zip);  // 10001
// Combining Destructuring
// You can mix array and object destructuring in one statement:


const complex = { arr: [1, 2], obj: { key: 'value' } };
const { arr: [aa, bb], obj: { key } } = complex;
console.log(aa);  // 1
console.log(bb);  // 2
console.log(key); // value



