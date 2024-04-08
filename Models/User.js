const mongoose = require('mongoose');
const Joi = require('joi');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['student', 'admin'],
        default: 'student'
    }
});

const User = mongoose.model('User', UserSchema);

const validateUser = (user) => {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
        role: Joi.string().valid('student', 'admin').default('student')
    });

    return schema.validate(user);
};

module.exports = { User, validateUser };
