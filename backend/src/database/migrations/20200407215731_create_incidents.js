
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table) {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    //relacionamento
    table.string('ong_id').notNullable();

    //fk
    //coluna ong_id referencia a coluna id na table ongs
    table.foreign('ong_id').references('id').inTable('ongs');
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
