
exports.up = function(knex) {
  return nnex.schema 
  .createTable('ingredients', tbl => {
      tbl.increments();

      tbl
        .string('name', 255)
        .notNullable()
        .unique();
  })
};

exports.down = function(knex) {
  
};
