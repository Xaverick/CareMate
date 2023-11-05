const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  task: String,
  status: Boolean,// checked then true or false
});

const TasksSchema = new mongoose.Schema({
  Diseasesname: String,
  todos: [TodoSchema],
});

const Tasks = mongoose.model("Tasks", TasksSchema);

module.exports = Tasks;
