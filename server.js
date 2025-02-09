// Import required dependencies
const express = require("express");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Define a port for the server to listen on
const PORT = process.env.PORT || 5000;

// Basic route to test the backend
app.get("/", (req, res) => {
  res.send("Hello, World! Your backend is working.");
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
