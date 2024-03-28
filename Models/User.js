const mongoose = require('mongoose')
const  Joi = require('joi')

const UserSchema = new mongoose.Schema({
    email :{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String
    },
    role:{
        type:String,
        enum:['student','admin'],
        default:'student'
    }
})

const validate = (user)=>{
    const schema = Joi.object({
        email:Joi.string().required(),
        password:Joi.string().required(),
        role: Joi.string().valid('student', 'admin').default('student')
    })
}

const User = mongoose.model('User',UserSchema);   

module.exports = {User,validate};