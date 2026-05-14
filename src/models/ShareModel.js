const mongoose = require("mongoose");

const shareSchema = new mongoose.Schema(
  {
    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },

    platform: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Share",
  shareSchema
);