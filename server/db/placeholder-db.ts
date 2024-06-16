import db from './connection.ts'

export async function getAllPlaceholderData() {
  return db('placeholderdata').select()
}
