let cart = [
    { name: "shoes", price: 2000 },
    { name: "shirt", price: 1200 },
    { name: "wallets", price: 800 },
    { name: "jeans", price: 2500 }
];

function orderDetail(cart){
    // 1. total number of products
    // 2. total amount of products 
}

function orderSummary(){
    // total price and total product
    // then genereate orderId using random generate
}

function paymentGateway(){
    // orderId, product details and price.....Write payment is successful / failed
}

function successfulOrder(){
    // it will give all details about the payment, product, name and evertthing
}

// Prototype for Filter

Array.prototype.evenPrototype = function(){
    let result = [];
    for(let i = 0 ; i < this.length ; i++){
        if(this[i] % 2 == 0){
            result.push(this[i]);
        }
    }
    return result;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let even = arr.evenPrototype();
console.log(even);


// using logic
Array.prototype.evenLogicPrototype = function(logic){
    let output = [];
    for(let i = 0 ; i < this.length ; i++){
        if(logic(this[i])){
            output.push(this[i]);
        }
    }
    return output;
}

let evenLogic = arr.evenLogicPrototype(function(n){
    return n % 2 == 0;
});
console.log(evenLogic);



// Reduce Function
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0); // 10


// reduce function prototype

Array.prototype.reducedPrototype = function(callback, initialValue){
    let acc = initialValue;
    for(let i = 0 ; i < this.length ; i++){
        acc = callback(acc, this[i], i, this);
    }
    return acc;
}


let reducedOutput = nums.reducedPrototype((acc, curr) => acc + curr, 0);
console.log(reducedOutput);

