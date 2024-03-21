const mongoose = require('monngoose');

const Schema = mongoose

const UserSchema = new mongoose.Schema({
    username:{
        String,
        required:true
    },
})
