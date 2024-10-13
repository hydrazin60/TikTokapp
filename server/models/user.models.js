import e from "express";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    mobileNumber: {
      type: Number,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    username: {
      type: String,
    },
    bio: {
      type: String,
      default: "",
    },
    flowers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    flowing: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    OwnPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "VideoModel",
      },
    ],
    VideoLikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "VideoModel",
      },
    ],
    faverites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "VideoModel",
      },
    ],
    isAdmin: {
      enum: [true, false],
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
