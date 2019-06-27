const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.developoment);
module.exports = db;