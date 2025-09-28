 const actor = {
    name: 'Pranto',
    age: 20,
    phone: '01789991375',
    money: 2000,
 }

//if right side is an object left side of destructuring also object
//use property name as a variable that contain the property value
const {phone, age, money} = actor
// const phone = actor.phone;
// const age = actor.age;
// const money = actor.money;

console.log(money)
console.log(phone)
console.log(age)

// array destructuring 
const numbers = [10, 30]
const [first, second] = numbers;
const [x, y] = [15, 25];

//advanced
function doubleThem(a,b){
   return [a*2, b*2];

}
const [num1, num2] = doubleThem(25, 50);
console.log(num1, num2)