const express = require('express');
const app = express();
const port = 3000;

// Middlewares
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Import routes
const indexRouter = require('./routes/index'); // Ensure this is correctly pointing to your routes file

// Use routes
app.use('/', indexRouter); // Using the router

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
