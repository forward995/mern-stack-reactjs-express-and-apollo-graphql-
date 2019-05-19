// Import the gql method from apollo-server-express
const { gql } = require('apollo-server-express');

// Construct a schema with gql and using the Graphql schema Language
const typeDefs = gql`
    type Post {
        _id: ID,
        title: String,
        content: String
    },
    type Query {
        posts: [Post]
    }
    type Mutation {
        addPost(title: String!, content: String!): Post
    }
`;

module.exports = typeDefs;