const db = require('../data/dbConfig.js');

module.exports = {
    getRecipes,
   addRecipe  
};

function getRecipes() {
  return db('recipes');
}

function addRecipe(recipe) {
  // passing 'id' as the second parameter is recommended to ensure the id is returned
  // when connecting to other database management systems like Postgres
  return db('recipes').insert(recipe, 'id');
}

