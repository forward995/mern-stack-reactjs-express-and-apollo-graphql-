// Import mongoose
const mongoose = require('mongoose');

// Create a query string to connect to MongoDB server
const DB_URI = 'mongodb://localhost:27017/graphql-app';

// Connect to MongoDB
mongoose.connect(DB_URI, { useNewUrlParser: true });

// Add basic event listeners on the mongoose.connection object
mongoose.connection.once('open', () => console.log('Connected to a MongoDB instance'));
mongoose.connection.on('error', error => console.error(error));

// Export mongoose, You will use it in server/server.js file
module.exports = mongoose;