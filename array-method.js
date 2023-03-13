const products = [
    {name:'vivo',price:3200, color:'black'},
    {name:'phone',price:4200, color:'yellow'},
    {name:'realme',price:5200, color:'red'},
    {name:'iphone',price:6200, color:'white'},
    {name:'nokia',price:2800, color:'black'},
];

// map
const details = products.map(product => console.log(product));
// console.log(details);

const details1 = products.map(product => product.name);
// console.log(details1)

// forEach
products.forEach(product => console.log(product.color));
// console.log(products)

// filter 
const cheap = products.filter(product => product.price >= 3200);
// console.log(cheap)

// find
const cheap1 = products.find(product => product.price > 3200);
console.log(cheap1)