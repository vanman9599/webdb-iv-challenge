
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 1.00},
        {recipe_id: 2, ingredient_id: 2, quantity: 2.00},
        {recipe_id: 2, ingredient_id: 1, quantity: 1.00},
        {recipe_id: 2, ingredient_id: 4, quantity: 1.00},
        {recipe_id: 2, ingredient_id: 5, quantity: 3.00},
      ]);
    });
};
