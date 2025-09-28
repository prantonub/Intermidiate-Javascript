const glass = {
    name: 'glass',
    color: 'red',
    price: 20,
    isCleaned: true,
} 
console.log(glass);
const keys = Object.keys(glass);
console.log(keys)
// output [ 'name', 'color', 'price', 'isCleaned' ]
const values = Object.values(glass);
console.log(values)
//output [ 'glass', 'red', 20, true ]

const entries = Object.entries(glass);
console.log(entries)
//array  of array, two dimensional array
// [
//   [ 'name', 'glass' ],
//   [ 'color', 'red' ],
//   [ 'price', 20 ],
//   [ 'isCleaned', true ]
// ]

//  delete glass.isCleaned;
// console.log(glass)'


const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass)

//freeze
// Object.freeze(glass);
glass.source = 'Bangladesh'
console.log(glass)

//no freeze
glass.MadeBY = 'BD'
console.log(glass)

//seal
Object.seal(glass);
glass.source = "India";
glass.newProp = "Test";
delete glass.price;
console.log(glass)