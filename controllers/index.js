const { signup, login, logout } = require('./user.controller')
const { createBlog, updateBlog, getBlogs } = require("./blog.controller")


module.exports = { signup, login, logout, createBlog, updateBlog, getBlogs }