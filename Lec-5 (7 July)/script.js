function welcomeStudents(welcomeMessage, goodbyeMessage){
    console.log(welcomeMessage + " " + this.studentName + " is a student of class", this.studentClass + " " + goodbyeMessage);
}

const student1 = {
    studentName: 'Vansh',
    studentClass: 'G4',
}

const student2 = {
    studentName: 'ABC',
    studentClass: 'G5',
}

//call
// welcomeStudents.call(student1, "Good Morning", "GoodBye"); // call gets invoked immidiately. no need to store

// welcomeStudents.call(student2, "Good Night", "See You");



// bind :-

// const greetStudent1 = welcomeStudents.bind(student1, "Morning", "GoodBye");
// const greetStudent2 = welcomeStudents.bind(student2, "Night", "See You");

// greetStudent1();
// greetStudent2();


// if we want to use an array to pass the messages, you need to spread the array elements as individual arguements when calling the function.
// const greetStudent1 = welcomeStudents.bind(student1, ...["Morning", "GoodBye"]);
// const greetStudent2 = welcomeStudents.bind(student2, ...["Night", "See You"]);

// greetStudent1();
// greetStudent2();



//apply
const greetStudent1 = welcomeStudents.apply(student1, ["Morning", "GoodBye"]);
const greetStudent2 = welcomeStudents.apply(student2, ["Night", "See You"]);



// prototypes of apply and bind



// currying
function sum(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
}
  
// Usage:
console.log(sum(2)(4)(6)); // Output: 12



// Event Bubbling and Event Capturing

const grandParent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener("click", (event) => {
    console.log("Grandparent click");
    event.stopPropagation();
}, false);


parent.addEventListener("click", (event)=>{
    console.log("Parent Click");
    event.stopPropagation();
}, false)

child.addEventListener("click", (event) => {
    console.log("Child CLick");
    event.stopPropagation();
}, false)

// by default : bubbling
/*
grandparent

parent
grandparent

child
parent
grandparent
*/

// event capturing
/* 
if we use true

if we click on child :- 
grandparent
parent
child 
will be printed
*/

/*
now if we want that we need to only print the one on which we click.
we need to use stop propagation and false
*/