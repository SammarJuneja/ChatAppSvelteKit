const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20,
  },
  avatar: {
    type: String,
    default: "OpenChat",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokenVersion: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  friends: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    default: []
  },
  groups: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chat'
    }],
    default: []
  },
  bio: {
    type: String,
    default: "Just joined"
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  verificationToken: {
    type: String,
    default: null
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;