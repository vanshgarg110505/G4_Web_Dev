const express = require('express')
const app = express()
const port = 3000


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

// app.post('/', (req, res) => {
//   res.send('Hello World! POST')
// })

// app.put('/', (req, res) => {
//   res.send('Hello World!PUT')
// })

// app.delete('/', (req, res) => {
//   res.send('Hello World! DELTE')
// })

// app.use('/',(req, res, next) => {
//   // res.send('Hello World! DELTE')
//   console.log("THIS IS USE  MIDDLEWARE");
//   next();
// })


// app.all("/",(req, res,next) => {
//   console.log('Hello World! ');
//   next()
// })

// app.all("/home",(req, res) => {
//   res.send('BYE World!')
// })


// const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'public')))


app.get('/ab?c',(req,res)=>{
  res.send("OK JI")
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})