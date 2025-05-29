import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()

router.get('/test', async (req, res) => {
  console.log('hitendpoint/news')
  const response = await request
    .get('https://api.nytimes.com/svc/archive/v1/2024/1.json')
    .query({ 'api-key': process.env.NYT_API_KEY })
  console.log(response)
  res.json(response.body)
})

export default router
