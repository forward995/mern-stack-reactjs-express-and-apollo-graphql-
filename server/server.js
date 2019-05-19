// Import Express and Apollo Server
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// Import mongoose
const mongoose = require('./config/database');

// Import Graphql type definitions
const typeDefs = require('./modules/post/graphqlSchema');

// Import Graphql resolvers
const resolvers = require('./modules/post/resolvers');

// Initialize an Express application
const server = new ApolloServer({ typeDefs, resolvers });

// Initialize an Express application
const app = express();

// Use the Express application as middleware in Apollo Server
server.applyMiddleware({ app })

// Set the port that the Express application will listen to
app.listen({ port: 3000 }, () => {
    console.log(`Server running on http://localhost:3000${server.graphqlPath}`);
});
