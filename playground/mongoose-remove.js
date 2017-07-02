const {ObjectID}=require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

Todo.findByIdAndRemove('59495641e888d36a122d4071').then((todo)=>{
  console.log(todo);
});
