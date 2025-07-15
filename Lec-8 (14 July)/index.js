const { sumOfTwo, xy } = require('./calculateTwo/sumOfTwo')
const mulOfTwo = require('./calculateTwo/mulOfTwo')
const divOfTwo = require('./calculateTwo/divOfTwo')

console.log('SCRIPT JS')

// CALCULATOR

// function sumOfTwo(a, b) {
//     console.log(a + b)
//     return a + b
// }

// function mulOfTwo(a, b) {
//     console.log(a * b)
//     return a * b
// }

// function divOfTwo(a, b) {
//     console.log(a / b)
//     return a / b
// }

console.log('XY', xy)
sumOfTwo(10, 20)
mulOfTwo(10, 20)
divOfTwo(10, 20)
