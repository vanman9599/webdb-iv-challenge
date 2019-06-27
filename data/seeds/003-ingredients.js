
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {  name: '1 Cup Flour'},
        {  name: 'Pepperoni'},
        {  name: 'Sausage'},
        {  name: 'Beef'},
        {  name: 'Tortillas'}
      ]);
    });
};
