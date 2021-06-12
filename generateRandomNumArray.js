// first array with less values
let LENGTH = 10

let firstArray = Array.from({ length: LENGTH }, () => getRandomInt())

let secondArray = Array.from({ length: LENGTH * 10 }, () => getRandomInt())

function getRandomInt() {
  return Math.floor(Math.random() * 100)
}


console.log(firstArray) // this will have 10 random numbers between 1 to 100
console.log(secondArray) // // this will have 100 random numbers between 1 to 100