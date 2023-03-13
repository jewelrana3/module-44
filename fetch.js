const student = {
    name: 'juyel',
    age: 33,
    address: 'bademaju',
    movies: ['king khan', 'my name is khan']
}
const studentJson = JSON.stringify(student);
// console.log(student)
// console.log(studentJson)

const studentObject = JSON.parse(studentJson);
// console.log(studentObject)

//  keys and value
const key = Object.keys(student)
const value = Object.values(student);
// console.log(key,value

const num = [33,43,43,55,67,2];
// num.forEach(n=>console.log(n));
num.map(m =>m*2)
// console.log(num)

const products = [
    {name:'vivo',price:3200, color:'black'},
    {name:'phone',price:4200, color:'yellow'},
    {name:'realme',price:5200, color:'red'},
    {name:'iphone',price:6200, color:'white'},
    {name:'nokia',price:2800, color:'black'},
];

const newProduct = {name:'itel',price:2800, color:'black'}
const addProduct = [...products,newProduct];
// console.log(addProduct.length)

const cancel = products.filter(p => p.name !== 'phone');
console.log(cancel)
