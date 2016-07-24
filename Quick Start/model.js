/**
 * Created by DELL on 4/26/2016.
 */
var mongoose = require('mongoose');
module.exports =  mongoose.Schema({
    firstname: String,
    lastname: String,
    phone:String,
    email:String
});
