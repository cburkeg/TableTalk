import { Router } from 'express'

import * as db from '../db/placeholder-db'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const data = await db.getAllPlaceholderData()
    res.json(data)
  } catch (error) {
    console.log(
      'There was an error getting the placeholder data. The error was: ',
    )
    console.error(error)
    res.status(500)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const result = await db.updatePlaceholderData(req.body)
    if (result === 1) res.sendStatus(204)
    else res.sendStatus(404)
  } catch (error) {
    console.log(
      'There was an error trying to edit the placeholder data. The error was: ',
    ),
      console.error(error)
    res.status(500)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await db.deletePlaceholderData(id)
    res.sendStatus(204)
  } catch (error) {
    console.log(
      'There was an error trying to delete the placeholder data. The error was: ',
    ),
      console.error(error)
    res.status(500)
  }
})

export default router
