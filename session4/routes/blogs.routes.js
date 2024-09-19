const express = require("express");
const {createblog , 
    getblog ,
    getblogbyId,
    deleteBlogbyId,
    updateBlogbyId} =require("../controller/blogs.controller");
const router = express.Router();


// router.get("/",getblog);
// router.post("/",createblog);
// router.get("/:blogId", getblogbyId);

//  another ways when route path is same so we do not 
//  need create the router again and again


router.route("/").get(getblog).post(createblog);

router.route("/:blogId").get(getblogbyId).delete(deleteBlogbyId).patch(updateBlogbyId);
module.exports = router;