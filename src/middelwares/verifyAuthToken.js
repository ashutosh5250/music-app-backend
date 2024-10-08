const jwt = require('jsonwebtoken');
require("dotenv").config();

const verifyAuthToken = (req, res, next) => {
    console.log(req.headers);
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({ error: 'Token not provided or invalid.' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.PRIVATEKEY);
        req.user = decoded; 
        next();
    } catch (error) {
        console.error('Token verification error:', error.message); 
        return res.status(401).send({ error: 'Invalid token.' });
    }
};
module.exports = verifyAuthToken