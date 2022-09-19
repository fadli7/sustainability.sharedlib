const { CarbonEmissions } = require("../models");

exports.createCE = async (db, payload) => {
  try {
    const response = await CarbonEmissions(db).create(payload);
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

exports.findOneCE = async (db, query = {}) => {
  try {
    const response = await CarbonEmissions(db).findOne(query);
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

exports.updateCE = async (db, payload, condition = {}) => {
  try {
    const response = await CarbonEmissions(db).findOneAndUpdate(condition, payload);
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

exports.findAllCE = async (db, query = {}) => {
  try {
    const response = await CarbonEmissions(db).find(query);
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

exports.bulkCreateCE = async (db, payloads) => {
  try {
    const response = await CarbonEmissions(db).insertMany(payloads);
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