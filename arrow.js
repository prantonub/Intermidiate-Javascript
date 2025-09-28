function add (a, b){
    const result = a + b;
    return result;
}

const sum = add(5, 10);
// console.log(sum);

//arrow function
const add3 = (a,b) => a+b

const sum3 = add3(10, 5);
// console.log(sum3); 

//another type
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4

const sum4 = add4 (1, 2, 3, 4)
// console.log(sum4);

//for multiplay
const mult = (num1, num2) => num1 * num2

const multiply = mult (2, 5)
console.log(multiply)

//ES5
function add(x, y){
    return x + y;
}

//ES6 UPDATE
let add = (x,y) => x + y;