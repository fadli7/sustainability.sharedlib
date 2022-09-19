const { CarbonEmissionsAirline } = require("../models");

exports.createCEA = async (db, payload) => {
  try {
    const response = await CarbonEmissionsAirline(db).create(payload);
    return response;
  } catch (error) {
    console.log(error);
    throw {
      error: {
        statusCode: 400,
        name: 'DataError',
        message: 'Insert into currentQueue collection fail',
      }
    };
  }
};

exports.findOneCEA = async (db, query = {}) => {
  try {
    const response = await CarbonEmissionsAirline(db).findOne(query);
    return response;
  } catch (error) {
    console.log(error);
    throw {
      error: {
        statusCode: 400,
        name: 'DataError',
        message: 'Insert into currentQueue collection fail',
      }
    };
  }
};

exports.updateCEA = async (db, payload, condition = {}) => {
  try {
    const response = await CarbonEmissionsAirline(db).findOneAndUpdate(condition, payload);
    return response;
  } catch (error) {
    console.log(error);
    throw {
      error: {
        statusCode: 400,
        name: 'DataError',
        message: 'Update Carbon Emissions collection fail',
      }
    };
  }
};

exports.findAllCEA = async (db, query = {}) => {
  try {
    const response = await CarbonEmissionsAirline(db).find(query);
    return response;
  } catch (error) {
    console.log(error);
    throw {
      error: {
        statusCode: 400,
        name: 'DataError',
        message: 'Insert into currentQueue collection fail',
      }
    };
  }
};

exports.bulkCreateCEA = async (db, payloads) => {
  try {
    const response = await CarbonEmissionsAirline(db).insertMany(payloads);
    return response;
  } catch (error) {
    console.log(error);
    throw {
      error: {
        statusCode: 400,
        name: 'DataError',
        message: 'Insert into currentQueue collection fail',
      }
    };
  }
};

exports.aggregateCEA = async (db, payloads) => {
  try {
    const response = await CarbonEmissionsAirline(db).aggregate(payloads);
    return response;
  } catch (error) {
    console.log(error);
    throw {
      error: {
        statusCode: 400,
        name: 'DataError',
        message: 'Insert into currentQueue collection fail',
      }
    };
  }
};