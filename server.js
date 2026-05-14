const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

// Middleware
app.use(express.json());

// Connect to MongoDB
const connectDB = require('./src/db/connection');
connectDB();

// Routes
const Router = require('./src/routers/Router');
app.use('/api/route', Router);

app.get('/', (req, res) => {
  res.send('Welcome to the Socially Approved API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});