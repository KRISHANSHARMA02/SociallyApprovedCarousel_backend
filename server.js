const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://socially-approved-carousel-swart.vercel.app",
    ],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Connect to MongoDB
const connectDB = require('./src/db/connection');
connectDB();

// Routes
const Router = require('./src/routers/Router');
app.use('/api/route', Router);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});