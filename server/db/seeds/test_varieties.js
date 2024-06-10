/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('valvevarieties').del()
  await knex('valvevarieties').insert([
    { id: 1, valve_variety: 'Pentode (signal)' },
    { id: 2, valve_variety: 'Pentode (output)' },
    { id: 3, valve_variety: 'Triode (signal)' },
    { id: 4, valve_variety: 'Triode (output)' },
  ])
}
