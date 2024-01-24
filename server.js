const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbConnection = require('./config/dbConnection')
const cookieParser = require('cookie-parser')
const { userRoutes } = require('./routes')

/**********connecting to batabase ******** */
dbConnection()

/************Node js Middleware ********** */
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


/************ user routes *************** */
app.use("/api/user", userRoutes)






/************** Runing the server to listen for request******** */
app.listen(port, () => { console.log(`Server runing on port ${port}`) })