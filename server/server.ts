import express from 'express'
import * as Path from 'node:path'

import gemini from './routes/proxy/gemini'
import news from './routes/proxy/nyt'

const server = express()

server.use(express.json())

// All routes should be exported back to this top level server file.
server.use('/api/v1/proxy/gemini', gemini)
server.use('/api/v1/proxy/news', news)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
