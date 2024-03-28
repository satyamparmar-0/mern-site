const jwt = require('jsonwebtoken');
const generateToken = (payload) => {
    const secretKey = process.env.JWT_SECRET_KEY;
    try {
        if (!secretKey) {
            throw new Error('JWT secret key not found in environment variables.');
        }
        return jwt.sign(payload, secretKey, { expiresIn: '1h' });
    } catch (error) {
        console.error('Token generation failed:', error.message);
        return null;
    }
};

module.exports = generateToken;