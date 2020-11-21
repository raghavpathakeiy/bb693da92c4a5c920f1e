var mongoose = require('mongoose');

userSchema = mongoose.Schema({
    "firstName":{type:String},
    "lastName":{type:String},
    "email":{type:String},
    
})

module.exports = mongoose.model('user',userSchema)