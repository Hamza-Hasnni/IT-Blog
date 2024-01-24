const bcrypt = require('bcrypt')


const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash('123456', salt)
    return hash
}

const comparePassword = async (password, hashedPassword) => {
    const passwordValidation = await bcrypt.compare(password, hashedPassword)
    return passwordValidation
}

module.exports = { hashPassword, comparePassword }