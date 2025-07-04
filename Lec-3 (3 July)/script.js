let cart = ['shoes', 'shirt', 'wallets']

function orderDetail(cart) {
    // 1. Total no of products
    // 2. Total amount of Products nos*1000

    const noOfProduct = cart.length
    const totalAmount = noOfProduct * 1000
    return {
        noOfProduct: noOfProduct,
        totalAmount: totalAmount,
    }
}

function orderSummary(cart) {
    // total price and total product
    // then generate orderId
    let orderDetails = orderDetail(cart)

    let totalPrice = orderDetails.totalAmount
    let totalProducts = orderDetails.noOfProduct
    let orderId = Math.floor(Math.random() * 1000000)

    console.log(`Order ID: ${orderId}`)
    console.log(`Total Products: ${totalProducts}`)
    console.log(`Total Price: Rs ${totalPrice}`)

    return {
        orderId: orderId,
        totalPrice: totalPrice,
        totalProducts: totalProducts,
    }
}

function paymentGateway() {
    // orderId, product details and price.. Payment is successfull
    let orderDetails = orderSummary(cart)

    console.log(`Processing payment for Order ID: ${orderDetails.orderId}`)
    console.log(`Payment of Rs ${orderDetails.totalPrice} is successful!`)

    return {
        paymentStatus: 'success',
        orderDetails: orderDetails,
    }
}

function successfullOrder() {
    // it will give all the details about the payment product name and everything
    let paymentDetails = paymentGateway()

    console.log('=== ORDER CONFIRMATION ===')
    console.log(`Order ID: ${paymentDetails.orderDetails.orderId}`)
    console.log(`Products: ${cart.join(', ')}`)
    console.log(`Total Products: ${paymentDetails.orderDetails.totalProducts}`)
    console.log(`Total Amount: Rs ${paymentDetails.orderDetails.totalPrice}`)
    console.log(`Payment Status: ${paymentDetails.paymentStatus}`)
    console.log('Thank you for your order!')

    return paymentDetails
}

// Execute the complete order process
successfullOrder()

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

