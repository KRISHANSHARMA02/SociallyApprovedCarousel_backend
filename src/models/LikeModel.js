const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },

    ipAddress: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Like",
  likeSchema
);