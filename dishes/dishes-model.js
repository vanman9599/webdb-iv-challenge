const db = require('../data/dbConfig.js');

module.exports = {
    getDishes,
  getDish,
  addDish  
};

function getDishes() {
  return db('dishes');
}

function getDish(id) {
  return db('dishes')
    .where({ id })
    .first();
}

function addDish(dish) {
  // passing 'id' as the second parameter is recommended to ensure the id is returned
  // when connecting to other database management systems like Postgres
  return db('dishes').insert(dish, 'id');
}

