/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('valvedata').del()
  await knex('valvedata').insert([
    {
      type: 'ECF200',
      valve_1_id: 3,
      valve_2_id: 1,
      filamentV: 6.3,
      filamentA: 0.41,
    },
    {
      type: 'ECC88',
      valve_1_id: 3,
      valve_2_id: 3,
      filamentV: 6.3,
      filamentA: 0.365,
    },
    {
      type: 'PFL200',
      valve_1_id: 1,
      valve_2_id: 2,
      filamentV: 16.5,
      filamentA: 0.3,
    },
    {
      type: 'PC97',
      valve_1_id: 3,
      valve_2_id: null,
      filamentV: 4.5,
      filamentA: 0.3,
    },
  ])
}
