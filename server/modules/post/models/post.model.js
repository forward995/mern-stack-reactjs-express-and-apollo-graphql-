// Note the use of ES6 destructuring
const { Schema, model } = require('mongoose');

// Instantiate a schema using mongoose Schema
const postSchema = new Schema({
    title: String,
    content: String
})

// Create a model with mongoose model() method
const Post = model('post', postSchema);
module.exports = Post;
