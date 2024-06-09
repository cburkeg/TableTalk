/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('valvedata', (table) => {
    table.string('type').primary()
    table.integer('valve_variety_id')
    table.integer('filamentV')
    table.integer('filamentA')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('valvedata')
}
