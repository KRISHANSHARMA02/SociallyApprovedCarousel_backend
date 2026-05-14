const dotenv = require("dotenv");

const connectDB = require("../db/connection");

const Video = require("../models/VideoModel");

const videos = require("../utils/videodata.json");

dotenv.config();

connectDB();

const seedData = async () => {
  try {
    await Video.deleteMany();

    await Video.insertMany(videos);

    console.log("Videos Seeded Successfully");

    process.exit();
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

seedData();