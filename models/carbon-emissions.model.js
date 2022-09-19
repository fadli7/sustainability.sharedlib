const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarbonEmissionsSchema = new Schema({
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
  totalWeight: {
    type: Number,
    required: true,
  },
  totalCo2Emissions: {
    type: Number,
    required: true,
  },
});

module.exports = (connection) =>
  connection.model("CarbonEmissions", CarbonEmissionsSchema);
