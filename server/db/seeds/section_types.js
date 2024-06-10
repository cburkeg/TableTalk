/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('section_types').del()
  await knex('section_types').insert([
    { id: 1, section_type: 'Pentode (signal)' },
    { id: 2, section_type: 'Pentode (output)' },
    { id: 3, section_type: 'Triode (signal)' },
    { id: 4, section_type: 'Triode (output)' },
  ])
}
