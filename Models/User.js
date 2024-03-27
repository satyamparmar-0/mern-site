const mongoose = require('mongoose')

const Schema =  mongoose.Schema;

const UserSchema = new Schema({
    name:String,
    course:String,
    fees:Number,
    location:String,
    date:{type:Date,default:Date.now}
})



const Student = mongoose.model('Student',UserSchema)

module.exports = Student;