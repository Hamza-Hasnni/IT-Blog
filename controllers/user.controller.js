const { User } = require('../models')
const { hashPassword, comparePassword } = require('../helpers/hashPassword')
const jwt = require('jsonwebtoken')



const signup = async (req, res) => {
    const userData = req.body
    try {
        userData.password = await hashPassword(userData.password)
        await User.create(userData)
        res.status(200).json({ message: "user created successfuly" })
    } catch (error) {
        res.status(400).json({
            message: "error while creating the user",
            error: error.message
        })
    }

}

const login = async (req, res, next) => {
    const { email, password } = req.body
    let passwordValidation
    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).json("Invalid email or password")
        } else {
            passwordValidation = await comparePassword(password, user.password)
        }
        if (passwordValidation) {
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1hr" })
            res.cookie("userAuth", token).json({ message: "login successfuly", userName: user.userName })

        } else {
            res.status(400).json("Invalid email or password")
        }
    } catch (error) {
        console.log(error.message)
    }
}

const logout = (req, res) => {
    if (req.cookies.userAuth) {
        res.clearCookie("userAuth").send("loged out");
    } else {
        res.send("no token, you're loged out")
    }
}



module.exports = { signup, login, logout }