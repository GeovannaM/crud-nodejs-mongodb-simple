var assert = require("assert");

//model
var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    dob: Date,
    address: String,
    phone: String,
    role: String
});
var user = new mongoose.model('User', schema);
//model


//config
//var user = mongoose.model('User');
var url = 'mongodb://localhost/crud01';

// Make Mongoose use `findOneAndUpdate()`. 
// Note that this option is `true` by default,
// you need to set it to false.
//mongoose.set('useFindAndModify', false);
//mongoose.set('useCreateIndex', true);

// Connection establishment
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
//var db = mongoose.connection;
//config


// read
var query = {
    username: "abc@example.com"
};

var service = {
    findUser: function (query, callback) {
        return user.findOne(query, callback);
    },
};
//console.log(service);

var bar = service.findUser(query, function (error, response) {
    if (error) {
        console.log(error);
        return;
    }
    if (!response) {
        console.log('No Data Found');
    }
    assert.equal("abc@example.com", response.username);
    console.log("passou!!");
    return;
});
//read
