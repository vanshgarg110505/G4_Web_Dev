// let userData = [
//     {
//         firstName: "Vansh",
//         age: "20"
//     },
//     {
//         firstName: "Yash",
//         age: "21"
//     },
//     {
//         firstName: "Vinayak",
//         age: "21"
//     }
// ]

// // Map 
// const nameMap = userData.map(user => user.firstName);
// console.log("First Names:", nameMap);

// // Filter
// const ageFilter = userData.filter(user => user.age > 20);
// console.log("Users with age > 20:", ageFilter);



// Promises Resolve
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I got Placed");
//     }, 4000);
// })

// promise1.then(result => {
//     console.log(result); // This will log "I got Placed" after 4 seconds
// });

// // Promise Reject
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("I didn't get Placed");
//     }, 4000);
// })

// promise2.then(result => {
//     console.log(result);
// }).catch((err)=>{
//     console.log("Error found : " ,err);
// });

// console.log(promise1);
// console.log(promise2);


// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Step 1");
//       resolve(10);
//     }, 1000);
//   })
//   .then((result) => {
//     console.log("Step 2");
//     return result + 5;
//   })
//   .then((result) => {
//     console.log("Step 3: Final Result =", result);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
  

//   promise4.then((res) => {
//     console.log("Getting salary")
//     console.log(res);
//   })
//   .then(()=>{
//     console.log("party");
//   })
//   .then(() =>{
//     console.log("Working");
//   })
//   .then(()=>{
//     console.log("layoff");
//   })
//   .catch((err) => {
//     console.log("Error");
//   });


// PROMISE API :- 

// 1. Promise.all

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Assignment Completed by person1");
    }, 2000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Assignment Completed by person2");
    }, 3000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Assignment Completed by person3");
    }, 5000);
})

let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Assignment Not Completed by person4");
    }, 4000);
})


// Promise.all(p1,p2,p3,p4);  This will give error as Promise.all requires single array arguement
Promise.all([p1,p2,p3,p4]).then((res)=> {
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})



// 2. Promise.allSettled
Promise.allSettled([p1,p2,p3,p4]).then((res) => {
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})


// 3. Promise.any
Promise.any([p1, p2, p3, p4]).then((result) => {
    console.log("First fulfilled:", result);
}).catch((err) => {
    console.log("Error", err);
});

// 4. Promise.race

Promise.race([p1, p2, p3, p4]).then((result) => {
    console.log("First settled (fulfilled):", result);
}).catch((err) => {
    console.log("First settled (rejected):", err);
});



// Async and Await

let p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Assignment Completed by person5");
    }, 2000);
})

async function checkAssignment(){
    const dataAssign = await p5;
    console.log("Checking Assignment : ", dataAssign);
}

checkAssignment();



// fetch data from 'https://dummyjson.com/products' and just do console log
async function fetchProducts() {
    try{
        const products = await fetch('https://dummyjson.com/products');
        const data = await products.json();
        console.log(data);
    }
    catch(err){
        console.log("Error : ", err.message);
    }
}

fetchProducts();


// If data is coming from this fetch, title, description, price in new array of object.

async function fetchAndExtractProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        
        const extracted = data.products.map(product => ({
            title: product.title,
            description: product.description,
            price: product.price
        }));
        console.log("Extracted Products:", extracted);
    } catch (err) {
        console.log("Error extracting products:", err.message);
    }
}

fetchAndExtractProducts();