// const productList = document.getElementById("productList");

// productList.addEventListener("click", (event)=>{
//     // console.log("Products");
//     if(event.target.tagName === "LI"){
//         console.log("Clicked on : ", event.target.textContent);
//     }
// })


// If i want to add a new element.

// const newElement = document.createElement("li");
// newElement.textContent = "Bottle";
// productList.appendChild(newElement);



///////////////////////////////////////////////////////////////////

// encapsulating it in a function

(function() {
    const textBox = document.getElementById("textBox");
    let debounceTimeout;
    textBox.addEventListener("input", (event) => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            console.log("Searched for : ", event.target.value);
        }, 1000);
    });
})();
