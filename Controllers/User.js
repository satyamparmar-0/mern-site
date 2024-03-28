const Student = require("../Models/AddStudent");

// here are all the logic of the app for the student

exports.AddStudent = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new Student({
      username: username,
      password: password,
      
    });

    await user.save();
    res.send({ status: true, message: "user created" });
  } catch (error) {
    console.log("Error while Signing Up", error.message);
    res.status(500).send("internal server error");
  }
};

exports.Login = async(req,res)=>{
    try{
        const {username,password} = req.body;
        const user = await Student.findOne({username});
        if(!user){
            res.send("Username not found or user not registered");
        }
        if(password!=user.password){
            res.send("Incorrect password");
        }
    }
    catch(error){
            console.log('Erro while Login',error.message);
            res.status(500).send('Internal server error');
    }
}


