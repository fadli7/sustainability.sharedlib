const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CurrentQueueSchema = new Schema({
  documentID: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
  isSuspend: {
    type: Boolean,
    required: true,
    default: false,
  },
  retryCount: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = (connection) =>
  connection.model("CurrentQueue", CurrentQueueSchema);
