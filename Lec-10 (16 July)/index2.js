
// console.log("SCRIPT STARTED");
// console.log(239);
// process.nextTick(()=>{
//     console.log("THIS IS NEXT1")
// })
// function xyz(){
//     console.log("THIS IS XYZ");
// }
// xyz();
// setTimeout(()=>{
//     console.log("THIS IS ST1")
// },1000)



// setImmediate(()=>{
//     console.log("THIS IS SET IMMEDIATE");
// })

// setTimeout(()=>{
//     console.log("THIS IS ST2")
// },0)

// process.nextTick(()=>{
//     console.log("THIS IS NEXT2")
// })

//////////////////////////////////////////////////////////////////////

// const fs = require('node:fs');
// const https = require('node:https');
// const {
//   pbkdf2,
// } = require('node:crypto');



// var a = 20;
// console.log(a);
// fs.readFile('./kuchbhi.txt', 'utf8', (err, data) => {
//   console.log("FS: ",data);
// });

// setTimeout(()=>{
//     console.log("SETTIMEOUT1")
// },0)
// process.nextTick(()=>{
//     console.log("THIS IS NEXT1")
// })
// https.get('https://encrypted.google.com/', (res) => {
//   console.log("API DATA SUCCESS");

//   setImmediate(()=>{
//     console.log("SET IMMEDIATE INNER")
//   })
//   process.nextTick(()=>{
//     console.log("THIS IS NEXT2")
// });


// }).on('error', (e) => {
//   console.error(e);
// });

// setTimeout(()=>{
//     console.log("SETTIMEOUT3")
// },0)

// setImmediate(()=>{
//     console.log("THIS IS SET IMMEDIATE");
// })

/////////////////////////////////////

// timeout_vs_immediate.js
// setTimeout(() => {
//   console.log('timeout');
// }, 1000);

// setImmediate(() => {
//   console.log('immediate');
// });


////////////////////////////////////////////////


const fs = require('node:fs');
const https = require('node:https');
const {
    pbkdf2,
} = require('node:crypto');



var a = 20;
console.log(a);
fs.readFile('./kuchbhi.txt', 'utf8', (err, data) => {
    console.log("FS: ", data);
});

setTimeout(() => {
    console.log("SETTIMEOUT1")
}, 0)
Promise.resolve("RESOLVED").then(console.log("P1"))

process.nextTick(() => {
    console.log("THIS IS NEXT1")
})
Promise.resolve("RESOLVED").then(console.log("P2"))


https.get('https://encrypted.google.com/', (res) => {
    console.log("API DATA SUCCESS");

    setImmediate(() => {
        console.log("SET IMMEDIATE INNER")
    })
    Promise.resolve("RESOLVED").then(console.log("P2"))


    process.nextTick(() => {
        console.log("THIS IS NEXT2")
    });


}).on('error', (e) => {
    console.error(e);
});

setTimeout(() => {
    console.log("SETTIMEOUT3")
}, 0)
Promise.resolve("RESOLVED").then(console.log("P3"))

setImmediate(() => {
    console.log("THIS IS SET IMMEDIATE");
})