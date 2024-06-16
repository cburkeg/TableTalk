import * as Path from 'node:path'
import valveRoutes from './routes/valves.ts'
import placeholderRoutes from './routes/placeholderdata.ts'

import express from 'express'
// import valveroutes from './routes/'

const server = express()
server.use(express.json())

const rootURL = '/api/v1/'
// ADD YOUR API ROUTES HERE

server.use(rootURL + 'valves', valveRoutes)
server.use(rootURL + 'placeholder', placeholderRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
