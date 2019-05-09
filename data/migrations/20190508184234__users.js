
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();

      tbl.string('name', 128).notNullable();

      tbl.string('username', 255).notNullable().unique();

      tbl.string('password', 255).notNullable();

      tbl.string('usertype').notNullable();

      tbl.string('email').notNullable().unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
