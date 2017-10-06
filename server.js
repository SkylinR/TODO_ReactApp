const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://admin:qweasd123@ds111885.mlab.com:11885/tasksdb', { useMongoClient: true });
mongoose.Promise = global.Promise;

// app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());

app.use(cors());
app.use('/api', routes);

app.use(function(req, res, err, next){
    res.header('Access-Control-Allow-Origin',  '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');
})

app.listen(4000, function(){
    console.log("Server is running");
});