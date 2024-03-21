const mongoose = require("mongoose");




const TodoSchema = mongoose.Schema({
    work:{
        type:String,
        required:true,
    },
    flag:{
        type:Boolean,
        default:false,
    }
} , {timestamp:true}

)

const Todo = mongoose.model("todo",TodoSchema);

module.exports = Todo;