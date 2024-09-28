let products =[
    {name:'rony',phone:'samsung',price:34000},
    {name:'rajib',phone:'vivo',price:14000},
    {name:'raj',phone:'oppo',price:24000},
    {name:'sakib',phone:'xiaomi',price:44000},
]


const newProduct =  {name:'rajbir',phone:'samsung',price:34000};

//copy products array and then add newProduct
const newProducts = [...products,newProduct];
console.log('copy products array and then add newProduct',newProducts);
//create a new array without one specific item
//remove raj means create a new array without the raj

const remaining = products.filter(product =>product.name !== 'raj');
console.log('remaining',remaining);
let added = {name:'Munshi',phone:'mi',price:14000};
products.push(added);
console.log(products);

