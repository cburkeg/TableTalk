import db from './connection.ts'

export async function getValveByType(type: string) {
  return db('valvedata')
    .join('valvevarieties', 'valvedata.valve_1_id', 'valvevarieties.id')
    .join('valvevarieties', 'valvedata.valve_2_id', 'valvevarieties.id')
    .where({ type })
    .select()
    .first()
}

// export async function getAllValves() {
//   return db('valvedata')
//     .join('valvevarieties', 'valvedata.valve_1_id', 'valvevarieties.id')
//     .join('valvevarieties', 'valvedata.valve_2_id', 'valvevarieties.id')
//     .select()
// }

// export async function getAllValves() {
//   return db('valvedata').select()
// }

// export async function getAllValves() {
//   return db('valvedata')
//     .join('valvevarieties', 'valvedata.valve_1_id', 'valvevarieties.id')
//     .select()
// }

export async function getAllValves() {
  return db('valvedata')
    .join('valvevarieties', 'valvedata.valve_1_id', 'valvevarieties.id')
    .select(
      'type',
      'valve_variety as valve_1',
      'valve_2_id',
      'filamentV',
      'filamentA',
    )
    .select()
}
