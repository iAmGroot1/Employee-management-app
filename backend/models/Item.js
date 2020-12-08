// a) Add a new employee – each user should have following details : empID, name, department and designation. 

// b) Add a task to an employee – each task shall consist of : taskID, taskDescription, assignedTo(user to whom the task is due) , assignedBy(user who assigns the task) and taskStatus (pending, progress, completed) 

// c) View tasks – whenver a particular employee logs in to the app, following two list should be displayed 

// - Tasks assigned by me 

// - Tasks assigned to me 


const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create Scheme
const ItemSchema = new Schema({

    empId: {
        type:Number,
        required : true
    },
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required : true
    }
})

module.exports = Emp = mongoose.model('emp', ItemSchema);