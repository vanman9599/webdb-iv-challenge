
exports.up = function(knex) {
    return knex.schema 
    .createTable('recipe_ingredients')
};

exports.down = function(knex) {
  
};
