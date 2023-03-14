const mongoose=require('mongoose');
const TodoSchema=new mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    }
})
const TodoList=mongoose.model('Todolist',TodoSchema);
module.exports=TodoList;