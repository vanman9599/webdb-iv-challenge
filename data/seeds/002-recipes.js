
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { dish_id: 1, name: 'Pepperonni Party Pizza'},
        { dish_id: 1, name: 'Sausage Lovers Pizza'},
        { dish_id: 2, name: 'Tex-Mex' },
        { dish_id: 2, name: 'Grannys' }
      ]);
    });
};
