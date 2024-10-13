import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    commentText: {
      type: String,
      required: true,
    },
    VideoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VideoModel",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", userSchema);
export default Comment;
