import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('point_items', table => {
    table.increments('id').primary();

    table.integer('point_id')
      .references('points.id')
      .notNullable();
      
    table.integer('item_id')
      .references('items.id')
      .notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('point_items');
}