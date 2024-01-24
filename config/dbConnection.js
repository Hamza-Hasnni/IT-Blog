const mongoose = require('mongoose')


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected successfuly :)")
    } catch (error) {
        console.log(`Error while connecting to database : ${error.message}`)
    }
}

module.exports = dbConnection