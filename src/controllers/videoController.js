const Video = require("../models/VideoModel");
const Like = require("../models/LikeModel");
const Share = require("../models/ShareModel");

const asyncHandler = require(
  "../utils/asyncHandler"
);

const getVideos = asyncHandler(
  async (req, res) => {
    const videos = await Video.find().sort({
      createdAt: -1,
    });

    res.status(200).json(videos);
  }
);

const likeVideo = asyncHandler(
  async (req, res) => {
    const { videoId } = req.body;

    const video = await Video.findById(videoId);

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video not found",
      });
    }

    video.likes += 1;

    await video.save();

    await Like.create({
      videoId,
      ipAddress: req.ip,
    });

    res.status(200).json({
      success: true,
      likes: video.likes,
    });
  }
);

const shareVideo = asyncHandler(
  async (req, res) => {
    const { videoId, platform } = req.body;

    const video = await Video.findById(videoId);

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video not found",
      });
    }

    video.shares += 1;

    await video.save();

    await Share.create({
      videoId,
      platform,
    });

    res.status(200).json({
      success: true,
      shares: video.shares,
    });
  }
);

module.exports = {
  getVideos,
  likeVideo,
  shareVideo,
};