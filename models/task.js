var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
    content:  String,
    date: String,
});

const Task = mongoose.model('task', taskSchema);

module.exports = Task;