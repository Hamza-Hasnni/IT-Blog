const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbConnection = require('./config/dbConnection')
const cookieParser = require('cookie-parser')
const { userRoutes, blogRoutes } = require('./routes')

/**********connecting to batabase ******** */
dbConnection()

/************Node js Middleware ********** */
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


/************ User routes *************** */
app.use("/api/user", userRoutes)

/************ Blog routes ************** */
app.use("/api/blog", blogRoutes)





/************** Runing the server to listen for request******** */
app.listen(port, () => { console.log(`Server runing on port ${port}`) })