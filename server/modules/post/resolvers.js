// Import the model created with mongoose
const Post = require('./models/post.model');

const resolvers = {
    Query: {
        posts: () => Post.find({})
    },
    Mutation: {
        addPost: (parent, post) => {
            // Create a new record in the database
            const newPost = new Post({
                title: post.title,
                content: post.content
            });
            return newPost.save();
        }
    }
};

module.exports = resolvers;