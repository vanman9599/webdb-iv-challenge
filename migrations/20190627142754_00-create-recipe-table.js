
exports.up = function(knex) {
  return knex.schema 
  .createTable('recipes', tbl => {
      tbl.increments();
      tbl
      .integer('dish_id')
      .unsigned()
      .references('id')
      .inTable('dishes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

      tbl
      .string('name', 255)
      .notNullable()
      .unique();
      
  })
};

exports.down = function(knex) {
  
};
