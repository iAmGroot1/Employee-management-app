const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create Scheme
const ItemSchema = new Schema({

    taskID: {
        type:Number,
        required : true
    },
    taskDesc: {
        type: String,
        required: true
    },
    assignedTo: {
        type: String,
        required: true
    },
    assignedBy : {
        type:String,
        required:true    
    },
    taskStatus: {
        type: String,
        required : true
    }
})

module.exports = Item = mongoose.model('item', ItemSchema);