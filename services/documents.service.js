const { Documents } = require("../models");

exports.createDocs = async (db, payload) => {
  try {
    const response = await Documents(db).create(payload);
    return response;
  } catch (error) {
    console.log(error);
    throw {
      error: {
        statusCode: 400,
        name: 'DataError',
        message: 'Insert into documents collection fail',
      }
    };
  }
};

exports.findAllDocs = async (db, query = {}) => {
  try {
    const response = await Documents(db).find(query);
    return response;
  } catch (error) {
    console.log(error);
    throw {
      error: {
        statusCode: 400,
        name: 'DataError',
        message: 'Insert into Documents collection fail',
      }
    };
  }
};

exports.findOneDocs = async (db, query = {}) => {
  try {
    const response = await Documents(db).findOne(query);
    return response;
  } catch (error) {
    console.log(error);
    throw {
      error: {
        statusCode: 400,
        name: 'DataError',
        message: 'Insert into documents collection fail',
      }
    };
  }
};