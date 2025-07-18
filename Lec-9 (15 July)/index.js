// // // console.log("SCRIPT JS");

// // // const {sumOfTwo,xy} = require("./calculateTwo/sumOfTwo");
// // // const mulOfTwo = require("./calculateTwo/mulOfTwo");
// // const divOfTwo = require("./calculateTwo/divOfTwo")

// // console.log("ASHDUSAIhdh")


// // // // console.log(xy)

// // // // var xy =30000;

// // // // CALCULATOR



// // // console.log("XY",xy)
// // // sumOfTwo(10,20);
// // // mulOfTwo(10,20);
// // // divOfTwo(40,10);

// // //IIFE

// // // (function(){

// // // }())



// /// SYNCHRONOUS

// // var a =20;

// // // console.log(a)

// // function something(){
// //     console.log("THIS IS SOMETHING");
// // }
// // function something2(){
// //     console.log("THIS IS SOMETHING2");
// // }
// // function something3(){
// //     console.log("THIS IS SOMETHING3");
// // }
// // something()
// // console.log(a);
// // something2()
// // something3()

// //ASYNC

// console.log("SOMETHING");
// setTimeout(()=>{
//     console.log("THIS IS ST")
// },2000)
// console.log("SOMETHING");

// setTimeout(()=>{
//     console.log("THIS IS ST")
// },2000)
// console.log("SOMETHING");

// setTimeout(()=>{
//     console.log("THIS IS ST")
// },2000)
// console.log("SOMETHING");

// setTimeout(()=>{
//     console.log("THIS IS ST")
// },2000)
// console.log("SOMETHING");

// setTimeout(()=>{
//     console.log("THIS IS ST")
// },2000)
// console.log("SOMETHING");


/////////////////////////////////////////////////////////////////////////

const {
  pbkdf2,
} = require('node:crypto');

console.log("START");

console.log("THIS IS STATEMENT 1");

pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});

console.log("THIS IS STATEMENT 2");

pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});

console.log("THIS IS STATEMENT 3");

pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});

console.log("THIS IS STATEMENT 4");

pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});

console.log("THIS IS STATEMENT 5");

pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});

console.log("THIS IS STATEMENT 6");

pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});

console.log("END");


// const {
//   pbkdf2Sync,
// } = require('node:crypto');

// console.log("START");


// const key = pbkdf2Sync('secret', 'salt', 2000000, 64, 'sha512');
// console.log(key.toString('hex'));  // '3745e48...08d59ae'

// console.log("END");

