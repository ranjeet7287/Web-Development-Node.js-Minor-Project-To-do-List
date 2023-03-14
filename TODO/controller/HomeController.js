
const TodoList=require('../modules/todolist');

module.exports.home=function(req,res){

    // fetching using mongoose
    TodoList.find({},function(err,todo){
        if(err){
            console.log('Error in fetching data');
            return;
        }
        return res.render('Homepage',{
        title:"Home",
        todolist:todo
        })
   })
}

/*
function for Date
creating todo list
function for updataing todo list
function for deleteing todo list
function for edit todo list
function for updating todo after editing
*/
function Date(dueDate){
    let months=['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
    newdate='';
    let monthapp='';

    if(dueDate[1]=='01'){
        monthapp=months[0];
    }
    else if(dueDate[1]=='02'){
        monthapp=months[1];
    }else if(dueDate[1]=='03'){
        monthapp=months[2];
    }else if(dueDate[1]=='04'){
        monthapp=months[3];
    }else if(dueDate[1]=='05'){
        monthapp=months[4];
    }else if(dueDate[1]=='06'){
        monthapp=months[5];
    }else if(dueDate[1]=='07'){
        monthapp=months[6];
    }else if(dueDate[1]=='08'){
        monthapp=months[7];
    }else if(dueDate[1]=='09'){
        monthapp=months[8];
    }else if(dueDate[1]=='10'){
        monthapp=months[9];
    }else if(dueDate[1]=='11'){
        monthapp=months[10];
    }else if(dueDate[1]=='12'){
        monthapp=months[11];
    }
    newdate=dueDate[2]+'-'+monthapp+'-'+dueDate[0];
    return newdate;
}

module.exports.createTodo=function(req,res){
    dueDate=req.body.Date.split('-');
    // spliiting date and taking month value
    let newdate='';
    newdate=Date(dueDate);
    TodoList.create({
        desc:req.body.desc,
        category:req.body.category,
        dueDate:newdate
    }),function(err,newArr){
        if(err){
            console.log('Opps error occured');
            return;
        }
        return res.redirect('/');
    }
}
// delete
module.exports.deleteTodo=function(req,res){
    sp=req.query.id;
    // getting the id from the ui 
    newsp=sp.split(',');
    for(let i=0;i<newsp.lenght;i++){
        // iterating over newsp to delete all the checked value
        TodoList.findByIdAndDelete(newsp[i],function(err){
            if(err){
                console.log('error');
                return;
            }
        })
    }
    return res.redirect('/');
}
// edit page
module.exports.EditPage=function(req,res){
    console.log('aaa',req.query)
    TodoList.findById(req.query.id,function(err,todolist){
        if(err){
            console.log('error');
            return;
        }
        return res.render('EditPage',{
            title:EditPage,
            todolist:todolist
        })
    })
}
// todo after edit
module.exports.EditDetails=function(req,res){
    dueDate=req.body.dueDate.split('-');
    let newdate='';
    newdate=Date(newdate);
    TodoList.updateOne(
        {_id:req.query.id},
        {$set:
            {
                desc:req.body.desc,
                category:req.body.category,
                dueDate:newdate
            }
        }
        ,function(err,tododata){
            if(err){
                console.log('error while updating');
                return;
            }
            return res.redirect('/');
        }
    )
}