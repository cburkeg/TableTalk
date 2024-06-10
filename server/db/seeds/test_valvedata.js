/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('valvedata').del()
  await knex('valvedata').insert([
    {
      type: 'ECF200',
      filamentV: 6.3,
      filamentA: 0.41,
    },
    {
      type: 'ECC88',
      filamentV: 6.3,
      filamentA: 0.365,
    },
    {
      type: 'PFL200',
      filamentV: 16.5,
      filamentA: 0.3,
    },
    {
      type: 'PC97',
      filamentV: 4.5,
      filamentA: 0.3,
    },
    {
      type: 'ECC81',
      filamentV: 6.3,
      filamentA: 0.3,
    },
    {
      type: 'ECC82',
      filamentV: 6.3,
      filamentA: 0.3,
    },
    {
      type: 'ECC83',
      filamentV: 6.3,
      filamentA: 0.3,
    },
    {
      type: 'PL86',
      filamentV: 15,
      filamentA: 0.3,
    },
    {
      type: 'EL84',
      filamentV: 6.3,
      filamentA: 0.75,
    },
  ])
}
