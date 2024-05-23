const bcrypt = require('bcryptjs');
const generateToken = require('../Middlewares/auth');
const User = require("../Models/User");

exports.register = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    
    // const existingUser = await User.findOne({ email });
    // if (existingUser) {
    //   return res.status(400).send("Email is already registered");
    // }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

  
    const newUser = new User({
      email,
      password: hashedPassword,
      role
    });

    
    await newUser.save();

    // Generate a token for the new user
    const token = generateToken({ userId: newUser._id, role: newUser.role });

    // Send response based on user role
    if (newUser.role === 'admin') {
      res.send('You are admin');
    } else {
      res.send('You are Student');
    }
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("Username not found or user not registered");
    }

  
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send("Incorrect password");
    }

  
    const token = generateToken({ userId: user._id, role: user.role });

    
    if (user.role === 'admin') {
      res.send({ message: 'You are admin', token });
    } else {
      res.send({ message: 'You are Student', token });
    }
  } catch (error) {
    console.error('Error while logging in:', error.message);
    res.status(500).send('Internal server error');
  }
};
