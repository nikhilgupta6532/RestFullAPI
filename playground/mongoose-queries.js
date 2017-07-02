const {ObjectID}=require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id='59495641e888d36a122d4071';
if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}

Todo.findById(id).then((todo)=>{
  if(!todo){
    return console.log('unable to find a todo');
  }
  console.log('Todo',todo);
}).catch((e)=>{
  console.log(e);
})
