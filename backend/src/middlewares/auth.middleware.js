const foodpartnerModel = require('../models/foodpartner.model');
const jwt = require('jsonwebtoken');

async function authFoodPartnerMiddleware(req, res, next) {

    const token = req.cookies.token
    if (!token){
        return res.status(401).json({ message:"Please Login First!" })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const foodPartner = await foodpartnerModel.findById(decoded.id);
        if (!foodPartner){
            return res.status(401).json({ message:"Please Login First!" })
        }
        req.foodPartner = foodPartner;
        next();
    } catch (error) {
        return res.status(401).json({ message:"Please Login First!" })
    }
}

module.exports = {
    authFoodPartnerMiddleware
}