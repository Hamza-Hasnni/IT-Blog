const { Blog } = require('../models')



/********************* Create a new Blog *************** */
const createBlog = async (req, res) => {
    const blog = req.body
    const creator = req.user._id
    try {
        blog.blogCreator = creator
        const data = await Blog.create(blog)
        res.status(200).json({ message: "blog created successfuly", data })
    } catch (error) {
        res.status(400).json({ message: "error while creating you Post" })
        console.log(error.message)
    }
}

//--------------------- update a post by id --------------------------
const updateBlog = async (req, res) => {
    const update = req.body
    const { id } = req.params
    try {
        const blog = await Blog.findByIdAndUpdate(id, update)
        res.status(200).json({ message: " Post updated successfuly :)", post: blog })

    } catch (error) {
        res.status(400).json({ message: "Error while updating the post" })
        console.log(error.message)

    }
}

/*************************Get all post by blog creator **************************/
const getBlogs = async (req, res) => {
    const { userId } = req.params
    console.log(userId)
    let blogs
    try {
        blogs = await Blog.find({ blogCreator: userId })
        if (!blogs || blogs.length === 0) {
            res.status(400).json({ message: "no blog created yet!" })
        } else {
            res.status(200).json(blogs)
        }
    } catch (error) {
        res.status(400).json({ message: "Error while geting Blogs" })
        console.log(error.message)

    }
}


module.exports = { createBlog, updateBlog, getBlogs }