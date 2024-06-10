/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('types_and_sections', (table) => {
    table.increments('id').primary()
    table.string('valve_type')
    table.integer('section_type_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('types_and_sections')
}
