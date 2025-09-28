const max = Math.max(2, 10, 29, 105, 50, 10)
const numbers = [3, 4, 10, 15, 7, 200];
const arrayMax = Math.max(...numbers)
// console.log(max)f
// console.log(arrayMax)
// console.log(...numbers) 
//use spread operator to copy 
const friends = ["Shakib", "Nafiz", "Tamim", "Hasan"];
const bondhu = friends;
const dosto = [...friends]// copy
console.log(dosto)
friends.push("Taskin")
console.log(dosto)
console.log(friends)

//advance
const newFriends = [...friends, "Saif"]// add extra elements while copy
console.log(newFriends)