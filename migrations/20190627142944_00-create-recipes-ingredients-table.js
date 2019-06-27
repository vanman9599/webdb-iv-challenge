
exports.up = function(knex) {
    return knex.schema 
    .createTable('recipe_ingredients', tbl => {
        tbl.increments();

        tbl
            .float('quantity')
            .notNullable()
        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');

        tbl
            .integer('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');

        
    })
};

exports.down = function(knex) {
  
};
