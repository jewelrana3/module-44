const number = [3, 44, 543, 5, 67, 76];
const student = {
    name: 'juyel',
    age: 33,
    address: 'bademaju',
    movies: ['king khan', 'my name is khan']
}
// 1. templeting string
const about = `my name is ${student.name} and age ${student.age}
 and movies ${number[2]}`
console.log(about);

// 2. arrow function
const oneNumber = () => 44;
const numbers = num => num + 333;
const isEven = x => x % 2 === 0;
const thereH = (x, y ,z)=> x + y + z;
const result = thereH(2,3,4);
const twoParameter = (num1,num2)=>{
    const num = num1 * num2;
    return num;
}
const point  = twoParameter(44,2);
// console.log(point)


// console.log(numbers)

// 3.spread opretor
const number3 = [33,23,11,45,67];
const numberCurrent = [...number3,66,89];
console.log(numberCurrent)

// const newNumber = number3;
number3.push(44);
number3.push(84);
// number3.pop(44);
console.log(number3)

