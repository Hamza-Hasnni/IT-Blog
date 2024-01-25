const mongoose = require('mongoose')
const { Schema } = mongoose


const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        min: 6
    },
    description: {
        type: String,
        required: true,
        min: 10
    },
    blogImg: String,
    blogCreator: {
        type: Schema.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog