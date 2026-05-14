const express = require('express');
const router = express.Router();
// Routes
const {
  getVideos,
  likeVideo,
  shareVideo,
} = require("../controllers/videoController");


router.get("/videos", getVideos);

router.post("/like", likeVideo);

router.post("/share", shareVideo);

module.exports = router;