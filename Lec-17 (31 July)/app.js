const express = require('express');
const app = express();




// app.get('/ab?cd', (req, res) => {
//   res.send('ab?cd')
// })


// app.get(/.*fly$/, (req, res) => {
//   res.send('/.*fly$/')
// })


// const isLogged = function (req,res,next){
//   console.log("LOGGED 1 IN USER");
//   next();
// }

// const isLogged2 = function (req,res,next){
//   console.log("LOGGED 2 IN USER");
//   next();
// }

// const isLogged3 = function (req,res,next){
//   console.log("LOGGED 3 IN USER");
//   next();
// }

// const isLogged4 = function (req,res){
//   // console.log("LOGGED 4 IN USER");
//   res.send("THIS IS END")
// }
// // app.use(isLogged);

// app.get("/",(req,res)=>{
//   res.send("THIS IS HOME PAGE")
// });

// app.get("/dashboard", [isLogged, isLogged2,isLogged3,isLogged4]);

// app.get("/cart",(req,res)=>{
//   res.send("THIS IS cart PAGE")
// });

// app.get("/payment",(req,res)=>{
//   res.send("THIS IS Payment PAGE")
// });

// const birdRouter = require("./router.js")

// const timeLog = (req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// }
// app.use(timeLog);
// app.use("/bird",birdRouter)

// app.get("/",(req,res)=>{
//   res.send("THIS IS HOME PAGE")
// });

// app.get("/cart",(req,res)=>{
//   res.send("THIS IS cart PAGE")
// });

// app.get("/payment",(req,res)=>{
//   res.send("THIS IS Payment PAGE")
// });



////////////////////////////// ERROR HANDLER /////////////////////////


app.get("/",(req,res)=>{
  try{
    // res.send("THIS IS HOME PAGE")
    throw new Error("API DATA NAHI AYA")
  }catch(err){
    res.status(500).send("ERROR OCCURED " + err.message);
  }
});

app.get("/cart",(req,res)=>{
    try{
    res.send("THIS IS cart PAGE")
  }catch(err){
    res.status(500).send("ERROR OCCURED " + err.message);
  }
});

app.get("/payment",(req,res)=>{
  try{
    res.send("THIS IS Payment PAGE")
  }catch(err){
    res.status(500).send("ERROR OCCURED " + err.message);
  }
});

//Intern

app.get("/internurl",(req,res)=>{
  // res.send("THIS IS INTERN KA URL")
  throw new Error("API INTERN DATA NAHI AYA")
});

//WILDCARD ERROR 

// ALWAYS IN LAST ERROR HANDLER 

app.use((err, req, res, next) => {
  // console.error(err.stack)
  res.status(500).send('Something broke!')
})


//ERROR HANDLER TO HANDLE ANY PATH

app.use("/",(req,res)=>{
  res.status(404).send("BHAI PLEASE PUT RIGHT PATH !!!")
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});