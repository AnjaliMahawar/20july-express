//console.log('it\'s working')
const express = require('express')
const app = express()
require('dotenv').config();

//application MW
app.use((req,res,next)=>{

//in order to check req. type 

  console.log(req.method)

  if (req.method==='GET'){

   // console.log('hloo')

   res.status(400).json({
      "msg":" sorry ! GET request is not allowed ."
   })


  }
  else{
    next()
  }

    next()
})



app.post('/', function (req, res) {
  res.json({
    "msg":"hello from Anjali Mahawar"
  })
})
let PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`THIS APPLICATION IS RUNNING ON PORT ${PORT}`)
})