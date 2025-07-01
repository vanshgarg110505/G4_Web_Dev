console.log("Hello World");

var a = 123;

function abc(){
    console.log("This is function ABC");
    function hgf(){
        console.log("This is function HGF");
    }
    hgf();
}

def();

function def(){
    console.log("This is function DEF");
}
abc();

var b = 300;
console.log(b);



var p = 200;
console.log(p);


var xyz = () => {
    console.log("XYZ function called");
}

xyz();


var q = 300;
console.log(q);

{
    //compound statement

    // grand parent scope
    let a = 100;
    let b = 200;
    let c = 300;

    console.log(a);
    console.log(b);
    console.log(c);

    {
        // parent scope
        console.log(a);
        console.log(b);
        console.log(c);

        {
            // child scope
            console.log(a);
            console.log(b);
            console.log(c);
        }
    }
}



 
function grand(){
    var a = 500;
    var b = 600;
    var c = 700;
    function parent(){
        var d = 800;
        function child(){
            console.log(a);
            console.log(b);
            console.log(c);
            console.log(d);
        }
        child();
    }
    parent();
}
grand();

// var is function-scoped By the time the setTimeout callbacks run (after 2 seconds), the loop has already finished, and i is now 6.
for(var i = 0; i <= 5; i++){
    setTimeout(() => {
        console.log(i);
    }, 2000);
}

// let is block scoped so each iteration will have a new i // 0 1 2 3 4 5
for(let i = 0; i <= 5; i++){
    setTimeout(() => {
        console.log(i);
    }, 2000);
}



for (var i = 0; i <= 5; i++) {
    function closure(j) {
        setTimeout(() => {
            console.log(j);
        }, 2000);
    }
    closure(i);
}


// Higher Order Function

function pqr(cb){
    cb();
    console.log("PQR function called");
}

function cb(){
    console.log("CB function called");
}

pqr(cb);


function outer(){
    console.log("Outer function called");

    return function inner(){
        console.log("Inner function returned and called");
    }
}

const result = outer();
result();



