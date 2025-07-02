// console.log("Script Start");

// // setTimeout(() => {
// //     console.log("I am going to restaurant");
// // }, 4000);

// // setTimeout(() => {
// //     console.log("I am checking the menu for ordering");
// // }, 3000);

// function walkInRestaurant(cb){
//     console.log("I am walking inside the restaurant");
//     setTimeout(cb, 3000);
// }

// function menuCheck(cb){
//     console.log("I am checking the menu");
//     setTimeout(cb, 2000);
// }

// function foodOrder(cb){
//     console.log("I am ordering the food");
//     setTimeout(cb, 6000);
// }

// function havingLunch(cb){
//     console.log("I am Having food");
//     setTimeout(cb, 8000);
// }

// function payBill(cb){
//     console.log("I am paying the bill");
//     setTimeout(cb, 3000);
// }

// function walkAwayFromRes(){
//     console.log("Bye bye going home");
// }

// walkInRestaurant(()=>{
//     menuCheck(()=>{
//         foodOrder(()=>{
//             havingLunch(()=>{
//                 payBill(()=>{
//                     walkAwayFromRes();
//                 })
//             })
//         })
//     })
// })

// console.log("Script End");


// Array Operations :-

let arr = [2,4,6,8,10];
let doubled = arr.map(num => num * 2);
console.log(doubled);


// without using map

let arr2 = [2,4,6,8,10];
function doubleArrVal(arr2){
    let output = [];
    for(let i = 0 ; i < arr2.length ; i++){
        output.push(arr2[i] * 2);
    }
    return output;
}

const output = doubleArrVal(arr2);
console.log(output)


let arr3 = [1,2,3,4,5];
// prototype
Array.prototype.doubleArrVal = function(logic){
    let output1 = [];
    for(let i = 0 ; i < this.length ; i++){
        output1.push(logic(this[i]));
    }
    return output1;
}

// syntax is similar to map
let answer = arr3.doubleArrVal(function(x){
    return x * 2;
});
console.log(answer);

