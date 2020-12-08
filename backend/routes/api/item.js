const express = require('express')
const router = express.Router()

//Item Model
const Emp = require('../../models/Item')
const Item2 = require('../../models/Task')

// @route GET api
// @desc  Get All items
// We use only '/task' because we have already written /api/routes
//in our server.js file
router.get('/task', (req, res) => {
    // res.write("Get Function")
    // res.end("Hello")
    Item2.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})

router.get('/mytask',(req,res)=>{
    Item2.find({assignedBy: "Me"})
    .sort({ date: -1 })
    .then(items => res.json(items))
})
    
    



// @route GET api
// @desc  Get All items
// We use only '/Emp' because we have already written /api/routes
//in our server.js file
router.get('/Emp', (req, res) => {
    // res.write("Get Function")
    // res.end("Hello")
    Emp.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})

// @route POST api/task
// @desc  Create A Post for task
// We use only '/' because   we have already written /api/routes
//in our server.js file

router.post('/task', (req, res) => {
    console.log(req.body)
    const newItem = new Item2({
        taskID: req.body.taskID,
        taskDesc: req.body.taskDesc,
        assignedTo: req.body.assignedTo,
        assignedBy : req.body.assignedBy,
        taskStatus:req.body.taskStatus
    });
    console.log(newItem)
    try {
        newItem.save().then(item => {res.json(item)
        res.end()});
    }catch(err){
        console.log("could not save")
    }
})

// @route POST api/Emp
// @desc  Create A Post to employee
// We use only '/' because   we have already written /api/routes
//in our server.js file

router.post('/Emp', (req, res) => {
    const newItem = new Emp({
        empId : req.body.empId,
        name: req.body.name,
        department:req.body.department,
        designation:req.body.designation
    });
    try {
        newItem.save().then(item => res.json(item));
    }catch(err){
        console.log("could not save")
    }
})



module.exports = router;