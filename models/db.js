
var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/test';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
  console.log('Mongoose connected to: ' + dbURI);
});

mongoose.connection.on('error', function(err){
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function(){
  console.log('Mongoose disconnected');
});

var contacts = require('./contacts');

module.exports = function () {
  return {
    Contacts: contacts
  };
}();