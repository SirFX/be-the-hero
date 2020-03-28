exports.up = function(knex) {
  knex.schema.createTable("incidents2", function(table) {
    table.increments();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable();

    table.string("ong_id").notNullable();

    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs2");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("incidents2");
};
