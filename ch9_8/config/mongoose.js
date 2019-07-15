var config = require('./config'),
    mongoose = require('mongoose');
module.exports = function () {
    var db = mongoose.connect(config.db, {
        useCreateIndex: true,
        useNewUrlParser: true
    });
    
    return db;
};