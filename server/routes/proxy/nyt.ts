import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()

router.get('/', async (req, res) => {
  const response = await request
    .get('https://api.nytimes.com/svc/archive/v1/2024/1.json')
    .query({ apikey: process.env.KEY })
  res.json(response.body)
})

export default router
