const { CurrentQueue } = require("../models");

exports.createQueue = async (db, payload) => {
  try {
    const response = await CurrentQueue(db).create(payload);
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

exports.findAllQueue = async (db, query = {}) => {
  try {
    const response = await CurrentQueue(db).find(query);
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

exports.updateQueue = async (db, payload, condition = {}) => {
  try {
    const response = await CurrentQueue(db).findOneAndUpdate(condition, payload);
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

exports.deleteQueue = async (db, condition) => {
  try {
    const response = await CurrentQueue(db).deleteMany(condition);
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