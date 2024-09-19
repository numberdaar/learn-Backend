const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    title : String,
    author : [String],
    content : String,
    publishedAt : Date,
},{timestamps : true })

module.export = blogSchema;