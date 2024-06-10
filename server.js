// Import two packages: express and cors
const express = require("express");
const cors = require("cors");

// Create a new Express app
const app = express();

app.use(cors()); // Use the `cors` middleware to enable CORS.
app.use(express.json()); // Use the `express.json()` middleware to parse JSON request bodies.

// Run the Express app on port 8000.
app.listen(8000, () => console.log("Running on port 8000"));
