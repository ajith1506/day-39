// app.js or server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); // Import body-parser
const routes = require("./routes/routes");

const app = express();
const PORT = 3000;

// Connect to MongoDB

const uri = "mongodb://localhost:27017/guvi-fsd";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

// Middleware
app.use(bodyParser.json()); // Use body-parser for JSON parsing
app.use(express.json()); // This is optional if you're using Express 4.16.0 and higher

// Use Routes
app.use("/api", routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
