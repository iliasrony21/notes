//map,forEach,filter,find

let products =[
    {name:'rony',phone:'samsung',price:34000},
    {name:'rajib',phone:'vivo',price:14000},
    {name:'raj',phone:'oppo',price:24000},
    {name:'sakib',phone:'xiaomi',price:44000},
]
//map loop through the products array and also return the value
let price = products.map(product =>{
   return product.price;
   //map function [ 34000, 14000, 24000, 44000 ]
})
console.log('map function',price);

//forEach loop through the products array and no return
products.forEach(product =>{
    console.log('forEach function',product.phone);
    //forEach function samsung
// forEach function vivo
// forEach function oppo
// forEach function xiaomi
});

//filter conditionally search the value
let priceFilter = products.filter(product =>{
//    return product.name.includes('s'); //output:filter value [ { name: 'sakib', phone: 'xiaomi', price: 44000 } ]
   return product.price >15000;
// output: filter value [
//     { name: 'rony', phone: 'samsung', price: 34000 },
//     { name: 'raj', phone: 'oppo', price: 24000 },
//     { name: 'sakib', phone: 'xiaomi', price: 44000 }
//   ]
});
console.log('filter value',priceFilter);

//find conditionally search the value but always find just first and return one result .return a obj
let findValue = products.find(product =>{
   return product.price >= 1500;
   //Find value is { name: 'rony', phone: 'samsung', price: 34000 }
})
console.log('Find value is',findValue);