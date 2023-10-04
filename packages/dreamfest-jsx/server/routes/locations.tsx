import express from 'express'
import { renderToStaticMarkup } from 'react-dom/server'

import Layout from '../components/Layout.tsx'
import ShowLocation from '../components/ShowLocation.tsx'
import * as db from '../db/index.ts'
import EditLocation from '../components/EditLocation.tsx'

const router = express.Router()

// GET /locations
router.get('/', (req, res) => {
  // TODO: Replace this with all of the locations in the database
  const locations = [
    {
      id: 1,
      name: 'TangleStage',
      description:
        'Not the biggest stage, but perhaps the most hip. Not the biggest stage, but perhaps the most hip. Not the biggest stage, but perhaps the most hip.',
    },
    {
      id: 2,
      name: 'Yella Yurt',
      description:
        "It's a freakin' yurt! Get in here! It's a freakin' yurt! Get in here! It's a freakin' yurt! Get in here! It's a freakin' yurt! Get in here!",
    },
  ]

  res.send(
    renderToStaticMarkup(
      <Layout>
        <ShowLocation locations={locations} />
      </Layout>
    )
  )
})

// GET /locations/4/edit
router.get('/:id/edit', (req, res) => {
  const id = Number(req.params.id)

  // TODO: Get the location based on its id and replace this viewData
  const location = {
    id: id,
    name: 'TangleStage',
    description:
      'Not the biggest stage, but perhaps the most hip. Not the biggest stage, but perhaps the most hip. Not the biggest stage, but perhaps the most hip.',
  }

  res.send(
    renderToStaticMarkup(
      <Layout>
        <EditLocation location={location} />
      </Layout>
    )
  )
})

// POST /locations/edit
router.post('/edit', (req, res) => {
  // ASSISTANCE: So you know what's being posted ;)
  // const { id, name, description } = req.body

  // TODO: Update the location in the database based on its id

  res.redirect('/locations')
})

export default router
