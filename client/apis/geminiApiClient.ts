// Front end api client functions for google ai
// Make a request to the server's proxy route, NOT the external api directly.

// import * as Path from 'node:path' // I'm not sure if we need this or how to use it yet.

import request from 'superagent'

const rootURL = new URL('/api/v1', document.baseURI)

export async function getAIStory(date: string, input: string) {
  const defaultDate = 'today'
  const defaultInput = 'any random event occurring'

  const response = await request.get(
    `${rootURL}/proxy/gemini?date=${date || defaultDate}&input=${input || defaultInput}`,
  )
  // console.log('getATStory called, response is ', response)
  return response.text // as something - once I've sorted out the types.
}
