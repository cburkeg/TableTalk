import { Router } from 'express'

import * as db from '../db/valves.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const allValves = await db.getAllValves()
    res.json(allValves)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'BIG PROBLEM' })
  }
})

export default router
