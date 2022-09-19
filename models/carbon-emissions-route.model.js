const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarbonEmissionsRouteSchema = new Schema({
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
  origin: {
    type: String,
    required: true,
  },
  destination: {
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
  carrierCode: {
    type: String,
    required: true,
  },
});

module.exports = (connection) =>
  connection.model("CarbonEmissionsRoute", CarbonEmissionsRouteSchema);
