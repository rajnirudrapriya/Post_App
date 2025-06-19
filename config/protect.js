const userSchema = require('../model/userSchema')
const jwt = require('jsonwebtoken')

exports.protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(" ")[1];
        if (!token) {
            res.status(401).json({ success: false, message: 'Please Provide Valid Token' })
        }
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user = await userSchema.findById(decoded.id);
            if(!req.user){
                res.status(401).json({ success: false, message: 'User Not Found'})
            }
            next();
        }
        catch (error) {
            res.status(401).json({ success: false, message: 'Not Authorized' })
        }
    }
    else{
        res.status(401).json({ success: false, message: 'Please Provide Valid Token'})
    }    
}