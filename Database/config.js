const mongoose = require('monngoose');

const connectdb = async()=>{
    try{
       await mongoose.connect('mongodb://localhost:27017/git');
        console.log("MongoDb Connected SuccessFully! ");
    }
    catch(error){
        res.message({status:false},error);
    }
}

module.exports = connectdb;