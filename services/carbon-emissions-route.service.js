const { CarbonEmissionsRoute } = require("../models");

exports.createCER = async (db, payload) => {
  try {
    const response = await CarbonEmissionsRoute(db).create(payload);
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

exports.findOneCER = async (db, query = {}) => {
  try {
    const response = await CarbonEmissionsRoute(db).findOne(query);
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

exports.updateCER = async (db, payload, condition = {}) => {
  try {
    const response = await CarbonEmissionsRoute(db).findOneAndUpdate(condition, payload);
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

exports.findAllCER = async (db, query = {}) => {
  try {
    const response = await CarbonEmissionsRoute(db).find(query);
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

exports.bulkCreateCER = async (db, payloads) => {
  try {
    const response = await CarbonEmissionsRoute(db).insertMany(payloads);
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

exports.aggregateCER = async (db, payloads) => {
  try {
    const response = await CarbonEmissionsRoute(db).aggregate(payloads);
    return response;
  } catch (error) {
    console.log(error);
    throw {
      error: {
        statusCode: 400,
        name: 'DataError',
        message: 'Aggregate CarbonEmissionsRoute collection fail',
      }
    };
  }
};