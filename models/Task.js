//Importing Scheme from Mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Scheme

//Creating new Scheme for 'Task'... Basically just tells API what it expects
const TaskSchema = {
    title:{
      type:String,
      require:true
    },
    image:{
      type:String
    },
    description:{
      type:String,
      required:true
    },
    contact:{
      type:String,
      required:false
    },
    eta:{
      type:String,
      required:false
    }
}

module.exports = Task = mongoose.model('Task', TaskSchema)
