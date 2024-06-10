import db from './connection.ts'

// export async function getValveByType(type: string) {
//   return db('valvedata')
//     .join('valvevarieties', 'valvedata.valve_1_id', 'valvevarieties.id')
//     .join('valvevarieties', 'valvedata.valve_2_id', 'valvevarieties.id')
//     .where({ type })
//     .select()
//     .first()
// }

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
  return db('types_and_sections')
    .join(
      'section_types',
      'types_and_sections.section_type_id',
      'section_types.id',
    )
    .join('valvedata', 'types_and_sections.valve_type', 'valvedata.type')
    .select()
}
