const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./app/routes/UserRoutes");
const courseRoutes = require("./app/routes/CourseRoutes");

const app = express();
const port = process.env.PORT || 3001; // You can use environment variables for port configuration
const mongoURI = process.env.ATLAS_URI;
const databaseName = process.env.DATABASE;

mongoose.connect(`${mongoURI}${databaseName}`)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => console.error("Error connecting to MongoDB:", err));

app.use(cors());
app.use(express.json());

app.use('/users/', userRoutes);
app.use('/courses/', courseRoutes);