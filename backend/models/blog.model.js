import mongoose from 'mongoose';

const { Schema } = mongoose;

const blogData = new Schema({
    title: String,
    image:{type:String, required:true},
    content: String,
}, {timestamps: true});

const Blog = mongoose.model('Blog', blogData);

export default Blog;
