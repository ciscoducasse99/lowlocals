const express = require('express')
const router = express.Router()

//Defines the model using Mongoose's Schema
const Task = require('../../models/Task')

// ROUTE: GET
// DESC: Gets all tasks, sorted from first to last
// ACCESS: Public
router.get('/', (req,res) =>{
    Task.find()
        .sort({ date: -1})
        .then(items => res.json(items))
        .catch( err => {
          alert(err.message)
        })
})

// ROUTE: POST
// DESC: Takes in a request, using the Task model, from user then saves in JSON
// ACCESS: Public
router.post('/', (req,res) =>{

    //Create new task using Model
    const newTask = new Task ({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        eta:req.body.eta,
        contact:req.body.contact
    })

    //Save task and return response in json format
    newTask
      .save()
      .then(task =>
        res.json(task)
      )
})

module.exports = router
