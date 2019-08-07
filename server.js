//Importing packages needed to run servers and DB
const mongoose = require('mongoose')
const express = require('express')
const port = 5000
const path = require('path')
const config = require('config')
//require('dotenv').config()

//Variable 'app' used to use express
const app = express()

//Body parsing middleware provided by Express
app.use(express.json())

//Connecting to MongoDB using Mongoose
mongoose
    .connect('mongodb+srv://Cisco:978441Cisco@cluster0-p7dj5.mongodb.net/test?retryWrites=true', {useNewUrlParser: true})
    .then( () =>{
        console.log('MongoDB connected via Mongoose')
    })
    .catch( err => {
        console.log('error message: ' + err)
    })

// Use any routes to handle each request
app.use('/api/tasks', require('./routes/api/tasks'))

//Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
  // Set Static folder
  app.use(express.static('client/build'))

  //Loads statis folder
  app.get('*', (req,res) =>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

app.listen(port, () =>{
    console.log('Server running on port: ' + port)
})
