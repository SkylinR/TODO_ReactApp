var express = require('express');
var mongoose = require('mongoose');
var Task = require('../models/task');
const router = express.Router();


// ----- NURSES ROUTES ----- //

router.get('/tasks', function(req, res) {
    Task.find({}, function (err, task) {
        if(err) {
            res.status(500).send(err);
        }
        else {
            res.send(task);
        }
    });
});

router.post('/tasks', function(req, res, next) {

    console.log("Added task: ", req.body);
    Task.create(req.body).then(function(task) {
        res.send(task);
    }).catch(next);
});

// router.put('/tasks/:id', function(req, res, next){
//     Task.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(task){
//         res.send(task);
//
//     });
// });
//
router.delete('/tasks/:id', function(req, res, next) {
    Task.findByIdAndRemove({_id: req.params.id}).then(function() {
        Task.find({}, function (err, task) {
            res.send(task);
        });
    });
});

module.exports = router;