const { aggregateCEA, bulkCreateCEA, createCEA, findAllCEA, findOneCEA, updateCEA } = require('./services/carbon-emissions-airline.service');
const { bulkCreateCER, createCER, findAllCER, findOneCER, updateCER } = require('./services/carbon-emissions-route.service');
const { bulkCreateCE, createCE, findAllCE, findOneCE, updateCE } = require('./services/carbon-emissions.service');
const { createDocs, findAllDocs, findOneDocs } = require('./services/documents.service');
const { createQueue, deleteQueue, findAllQueue, updateQueue } = require('./services/queue.service');

module.exports = {
  aggregateCEA, bulkCreateCEA, createCEA, findAllCEA, findOneCEA, updateCEA,
  bulkCreateCER, createCER, findAllCER, findOneCER, updateCER,
  bulkCreateCE, createCE, findAllCE, findOneCE, updateCE,
  createDocs, findAllDocs, findOneDocs,
  createQueue, deleteQueue, findAllQueue, updateQueue,
};