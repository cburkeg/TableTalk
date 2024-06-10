/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('types_and_sections').del()
  await knex('types_and_sections').insert([
    { id: 1, valve_type: 'ECF200', section_type_id: 3 },
    { id: 2, valve_type: 'ECF200', section_type_id: 1 },
    { id: 3, valve_type: 'ECC88', section_type_id: 1 },
    { id: 4, valve_type: 'ECC88', section_type_id: 1 },
    { id: 5, valve_type: 'PFL200', section_type_id: 1 },
    { id: 6, valve_type: 'PFL200', section_type_id: 4 },
    { id: 7, valve_type: 'PC97', section_type_id: 3 },
    { id: 8, valve_type: 'ECC81', section_type_id: 3 },
    { id: 9, valve_type: 'ECC81', section_type_id: 3 },
    { id: 10, valve_type: 'ECC82', section_type_id: 3 },
    { id: 11, valve_type: 'ECC82', section_type_id: 3 },
    { id: 12, valve_type: 'ECC83', section_type_id: 3 },
    { id: 13, valve_type: 'ECC83', section_type_id: 3 },
    { id: 14, valve_type: 'PL86', section_type_id: 4 },
    { id: 15, valve_type: 'EL84', section_type_id: 4 },
  ])
}
