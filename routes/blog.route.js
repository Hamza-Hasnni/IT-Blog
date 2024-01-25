const express = require("express")
const { createBlog, updateBlog, getBlogs } = require("../controllers")
const router = express.Router()
const userAuth = require("../middlewares/authentication")

router.post("/create", userAuth, createBlog)
router.put("/update/:id", userAuth, updateBlog)
router.get("/:userId", userAuth, getBlogs)


module.exports = router