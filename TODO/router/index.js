const express=require('express');
const router = express.Router();
const HomeContoller=require('../controller/HomeController');
router.get('/',HomeContoller.home)
// Controllers for creating , deleteing , editdata , editpage
router.post('/create_todo',HomeContoller.createTodo);
router.post('/delete_todo',HomeContoller.deleteTodo);
router.post('/editdata',HomeContoller.EditPage);
router.post('/edit_todo',HomeContoller.EditDetails);

console.log("Router is loading Successfully");

module.exports=router;