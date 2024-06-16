import db from './connection.ts'

export async function getAllPlaceholderData() {
  return await db('placeholderdata').select()
}

interface UpdatedPlaceholder {
  id: number
  Country: string
  City: string
  Attraction: string
  Cuisine: string
  Climate: string
}

export async function updatePlaceholderData(
  updatedPlaceholder: UpdatedPlaceholder,
) {
  const { id } = updatedPlaceholder
  return await db('placeholderdata').where({ id }).update({
    Country: updatedPlaceholder.Country,
    City: updatedPlaceholder.City,
    Attraction: updatedPlaceholder.Attraction,
    Cuisine: updatedPlaceholder.Cuisine,
    Climate: updatedPlaceholder.Climate,
  })
}

export async function deletePlaceholderData(stringID: string) {
  const id = Number(stringID)
  return await db('placeholderdata').where({ id }).delete()
}
