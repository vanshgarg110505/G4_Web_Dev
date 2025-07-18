const fs = require('node:fs');
const https = require('node:https');
const {
  pbkdf2,
} = require('node:crypto');



// var a = 20;
// console.log(a);
// fs.readFile('./kuchbhi.txt', 'utf8', (err, data) => {
//   console.log("FS: ",data);
// });

// function xyz(){
//     console.log("THIS IS FUNCTION")
// }
// xyz();
// pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
//   if (err) throw err;
//   console.log("CRYPTOOO");  // '3745e48...08d59ae'
// });

// setTimeout(()=>{
//     console.log("SETTIMEOUT")
// },1000)


// https.get('https://encrypted.google.com/', (res) => {
//   console.log("API DATA SUCCESS");
  

// }).on('error', (e) => {
//   console.error(e);
// });


////////////////////////////////////////////////////////////


console.log("SCRIPT STARTED");
console.log(239);
process.nextTick(()=>{
    console.log("THIS IS NEXT1")
})
function xyz(){
    console.log("THIS IS XYZ");
}
xyz();
setTimeout(()=>{
    console.log("THIS IS ST1")
},1000)

setImmediate(()=>{
    console.log("THIS IS SET IMMEDIATE");
})

setTimeout(()=>{
    console.log("THIS IS ST2")
},0)

process.nextTick(()=>{
    console.log("THIS IS NEXT2")
})