
exports.up = function(knex) {
    return knex.schema.createTable('bloodsugar', tbl => {
        tbl.increments();

        tbl.timestamp('timestamp').defaultTo(knex.fn.now());

        tbl.integer('value').notNullable();

        tbl.boolean('below_threshold')

        tbl.integer('prediction')

        tbl
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('bloodsugar');
};
  
