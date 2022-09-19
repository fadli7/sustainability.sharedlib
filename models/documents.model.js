const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocumentsSchema = new Schema({
  documentID: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
});

module.exports = (connection) =>
  connection.model("Documents", DocumentsSchema);
