import { Router } from 'express'

import * as db from '../db/placeholder-db'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const data = await db.getAllPlaceholderData()
    res.json(data)
  } catch (error) {
    console.log(
      'There was an error getting the placeholder data. The error was:',
    )
    console.error(error)
    res.status(500)
  }
})

export default router
