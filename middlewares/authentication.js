const jwt = require('jsonwebtoken')
const { User } = require('../models')

const userAuth = async (req, res, next) => {

    let authcookie;
    if (req.cookies.userAuth) {
        try {
            authcookie = req.cookies.userAuth;
            const decoded = jwt.verify(authcookie, process.env.JWT_SECRET);
            const user = await User.findById(decoded.userId).select("-password");
            req.user = user;
            next();
        } catch (error) {
            console.log(error.message);
            res.send("not Authrized");
        }
    }
    if (!authcookie) {
        res.send("not token, not authorized");
    }
}

module.exports = userAuth