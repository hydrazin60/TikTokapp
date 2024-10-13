import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
    },
    video: {
      type: String,
      default: "",
    },
    authorID: {
      type: mongoose.Schema.Types.ObjectId,  // Single reference to a User (author)
      ref: "User",
    },
    love: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    shareVideo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const VideoModel = mongoose.model("VideoModel", videoSchema);
export default VideoModel;
