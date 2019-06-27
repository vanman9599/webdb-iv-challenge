
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        { name: 'Pizza'},
        { name: 'Tacos'}
        
      ]);
    });
};
