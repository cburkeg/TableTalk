/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('placeholderdata', (table) => {
    table.increments('id').primary()
    table.string('Country')
    table.string('City')
    table.string('Attraction')
    table.string('Cuisine')
    table.string('Climate')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('placeholderdata')
}
