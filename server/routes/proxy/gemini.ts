import express from 'express'
// import * as Path from 'node:path' // I'm not really sure if we need this or not

import 'dotenv/config'
import { GoogleGenAI } from '@google/genai'
const googleApiKey = process.env.GOOGLE_API_KEY
const genAI = new GoogleGenAI({ apiKey: googleApiKey })

const router = express.Router()

router.get('/', async (req, res) => {
  if (!googleApiKey) {
    console.log('GOOGLE_API_KEY not configured.')
    return res.sendStatus(500)
  }

  try {
    console.log('tying to get gemini api response from google ai..') // TEST LOG

    //  // UNCOMMENT THIS ONCE PARAMS ARE CONFIGURED
    // const date = req.query.date
    // const userInput = req.query.userInput
    // if (!date || !userInput) {
    //   console.log('Query params (date and userInput) are not defined properly.')
    //   return res.sendStatus(500)
    // }

    const response = await genAI.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: `This is a placeholder prompt for an API request - give me a fun fact! Could you also preface with a note of something along the lines of I'm a placeholder response that will change when api is configured!`, //  ADD LOGIC HERE TO MAKE USE OF QUERY PARAMS
    })
    if (
      !response ||
      !response.candidates ||
      !response.candidates[0] ||
      !response.candidates[0].content ||
      !response.candidates[0].content.parts ||
      !response.candidates[0].content.parts[0] ||
      !response.candidates[0].content.parts[0].text
    ) {
      return res.sendStatus(500)
    }
    const aiTextResponse = response.candidates[0].content.parts[0].text
    return res.status(200).send(aiTextResponse)
  } catch (error) {
    if (error instanceof Error) {
      return res.sendStatus(500)
    } else {
      return res.sendStatus(500)
    }
  }
})

export default router
