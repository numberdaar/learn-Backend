const { model } = require("mongoose");
const Blog = require("../models/blog.model");
const getblog = async(req,res) =>{
    try {
        res.send(await Blog.find());
    } catch (error) {
        res.status(500).send({message: "Oops something went wrong"})
    }
}
const createblog = async(req,res) =>{
    try {
        const newBlog = await Blog.create(req.body);
        // const newBlog = new Blog(req.body);
        // await newBlog.save();
        res.status(201).send(newBlog);
    } catch (error) {
        if (error.code === 11000)
            return res.status(409).send({message: `Blog with title already exist`});
        if (error.message.includes("validation Failed"))
            return res.status(400).send({message: `Please follow the schema of Blog`});
        res.status(500).send({message: "Oops something went wrong"})
    }
}
const getblogbyId = async(req,res) =>{
    try {
        const reqBlog = await Blog.findById(req.params.blogId);
        if (reqBlog) return res.send(reqBlog)
        res.status(404).send({message: "Blog not Found"})    
    } catch (error) {
        res.status(500).send({message: "Oops something went wrong"})
    }
}

const deleteBlogbyId = async(req,res) =>{
    try {
        const reqBlog = await Blog.findById(req.params.blogId);
        if (reqBlog) {
            await Blog.findByIdAndDelete(req.params.blogId)
            return res.sendStatus(204);
        }
        res.status(404).send({message: "Blog not Found"})    
    } catch (error) {
        res.status(500).send({message: "Oops something went wrong"})
    }
}

const updateBlogbyId = async(req,res) =>{
    try {
        const reqBlog = await Blog.findById(req.params.blogId);
        if (reqBlog) {
            // {new:true} when we update so its showing me previous value so for use of it we see update value at that time 
            const updateBlogb = await Blog.findByIdAndUpdate(req.params.blogId , req.body ,{new:true});
            return res.status(200).send(updateBlogb);
        }
        res.status(404).send({message: "Blog not Found"})    
    } catch (error) {
        res.status(500).send({message: "Oops something went wrong"})
    }
}
module.exports = {createblog ,getblog , getblogbyId ,deleteBlogbyId,updateBlogbyId}