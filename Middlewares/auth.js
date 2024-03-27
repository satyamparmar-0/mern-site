const jwt = require('jsonwebtoken');
const generateToken = (payload) => {
    return jwt.sign(payload,jwt_token_secret_key_for_auth, { expiresIn: '1h' }); // Replace 'your_secret_key' with your actual secret key
};

module.exports = generateToken;